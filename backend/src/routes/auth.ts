import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';
import { run, get } from '../database';
import rateLimit from 'express-rate-limit';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Demasiados intentos, intente más tarde' }
});

function createTransporter() {
  const host = process.env.SMTP_HOST;
  if (!host) return null;
  return nodemailer.createTransport({
    host,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

async function sendVerificationEmail(email: string, code: string): Promise<boolean> {
  const transporter = createTransporter();
  if (!transporter) {
    console.log(`[DEV] Verification code for ${email}: ${code}`);
    return true;
  }
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@nauticacademy.com',
      to: email,
      subject: 'Verifica tu email — NauticAcademy',
      html: `
        <h2>Bienvenido a NauticAcademy</h2>
        <p>Tu código de verificación es:</p>
        <h1 style="letter-spacing: 8px; font-size: 32px; color: #0920ad;">${code}</h1>
        <p>Ingresá este código en la app para verificar tu email.</p>
        <p>El código expira en 1 hora.</p>
      `,
    });
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

async function sendPasswordResetEmail(email: string, token: string): Promise<boolean> {
  const transporter = createTransporter();
  const resetLink = `${FRONTEND_URL}/reset-password?token=${token}`;
  if (!transporter) {
    console.log(`[DEV] Reset link for ${email}: ${resetLink}`);
    return true;
  }
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@nauticacademy.com',
      to: email,
      subject: 'Restablece tu contraseña — NauticAcademy',
      html: `
        <h2>Restablece tu contraseña</h2>
        <p>Hacé clic en el siguiente enlace para restablecer tu contraseña:</p>
        <a href="${resetLink}" style="display: inline-block; padding: 12px 24px; background: #0920ad; color: white; text-decoration: none; border-radius: 8px;">Restablecer contraseña</a>
        <p>O copiá este enlace en tu navegador:</p>
        <p>${resetLink}</p>
        <p>El enlace expira en 1 hora.</p>
      `,
    });
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

router.post('/register', authLimiter, [
  body('firstName').trim().notEmpty().escape(),
  body('lastName').trim().notEmpty().escape(),
  body('nickname').trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 })
], async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, nickname, email, password } = req.body;

  try {
    const existing = await get('SELECT id, emailVerified FROM users WHERE email = ?', [email]);
    if (existing) {
      return res.status(409).json({ error: 'El email ya está registrado' });
    }

    if (nickname) {
      const nickExists = await get('SELECT id FROM users WHERE nickname = ?', [nickname]);
      if (nickExists) {
        return res.status(409).json({ error: 'El nickname ya está en uso' });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = crypto.randomInt(100000, 999999).toString();
    const verificationExpiresAt = new Date(Date.now() + 3600000).toISOString();

    const result = await run(
      'INSERT INTO users (firstName, lastName, nickname, email, password, verificationToken, verificationExpiresAt) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [firstName, lastName, nickname || null, email, hashedPassword, verificationCode, verificationExpiresAt]
    );

    const token = jwt.sign({ userId: result.lastID }, JWT_SECRET, { expiresIn: '7d' });

    await sendVerificationEmail(email, verificationCode);

    res.status(201).json({
      token,
      user: {
        id: result.lastID,
        firstName,
        lastName,
        nickname: nickname || null,
        email,
        emailVerified: false,
        xp: 0,
        level: 1,
        streak: 0,
      }
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/verify-email', [
  body('code').notEmpty().isString()
], async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { code } = req.body;
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    const user = await get(
      'SELECT id, emailVerified, verificationToken, verificationExpiresAt FROM users WHERE id = ?',
      [decoded.userId]
    );

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    if (user.emailVerified) {
      return res.json({ message: 'Email ya verificado' });
    }

    if (user.verificationToken !== code) {
      return res.status(400).json({ error: 'Código inválido' });
    }

    if (new Date(user.verificationExpiresAt) < new Date()) {
      return res.status(400).json({ error: 'Código expirado. Solicitá uno nuevo.' });
    }

    await run(
      'UPDATE users SET emailVerified = 1, verificationToken = NULL, verificationExpiresAt = NULL WHERE id = ?',
      [decoded.userId]
    );

    res.json({ message: 'Email verificado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Token inválido o expirado' });
  }
});

router.post('/resend-verification', authLimiter, [], async (req: Request, res: Response) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    const user = await get(
      'SELECT id, email, emailVerified FROM users WHERE id = ?',
      [decoded.userId]
    );

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    if (user.emailVerified) {
      return res.json({ message: 'Email ya verificado' });
    }

    const newCode = crypto.randomInt(100000, 999999).toString();
    const expiresAt = new Date(Date.now() + 3600000).toISOString();

    await run(
      'UPDATE users SET verificationToken = ?, verificationExpiresAt = ? WHERE id = ?',
      [newCode, expiresAt, decoded.userId]
    );

    await sendVerificationEmail(user.email, newCode);

    res.json({ message: 'Código reenviado' });
  } catch (error) {
    res.status(400).json({ error: 'Token inválido o expirado' });
  }
});

router.post('/login', authLimiter, [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty()
], async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await get('SELECT * FROM users WHERE email = ?', [email]);
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    await run('UPDATE users SET lastActiveDate = ?, streak = CASE WHEN date(?, "localtime") = date(lastActiveDate, "+1 day", "localtime") THEN streak + 1 ELSE 1 END WHERE id = ?',
      [new Date().toISOString(), new Date().toISOString(), user.id]);

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        nickname: user.nickname,
        email: user.email,
        emailVerified: !!user.emailVerified,
        xp: user.xp,
        level: user.level,
        streak: user.streak,
        language: user.language,
        theme: user.theme
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/forgot-password', authLimiter, [
  body('email').isEmail().normalizeEmail()
], async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await get('SELECT id FROM users WHERE email = ?', [email]);
    if (!user) {
      return res.json({ message: 'Si el email existe, recibirá instrucciones' });
    }

    const resetToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    const expiresAt = new Date(Date.now() + 3600000).toISOString();

    await run('INSERT INTO password_resets (userId, token, expiresAt) VALUES (?, ?, ?)',
      [user.id, resetToken, expiresAt]);

    await sendPasswordResetEmail(email, resetToken);

    res.json({ message: 'Si el email existe, recibirá instrucciones' });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/reset-password', authLimiter, [
  body('token').notEmpty(),
  body('password').isLength({ min: 6 })
], async (req: Request, res: Response) => {
  const { token, password } = req.body;

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    const reset = await get(
      'SELECT * FROM password_resets WHERE token = ? AND used = 0 AND expiresAt > ?',
      [token, new Date().toISOString()]
    );

    if (!reset) {
      return res.status(400).json({ error: 'Token inválido o expirado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await run('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, reset.userId]);
    await run('UPDATE password_resets SET used = 1 WHERE id = ?', [reset.id]);

    res.json({ message: 'Contraseña actualizada correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Token inválido o expirado' });
  }
});

export default router;
