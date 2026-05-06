import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import { run, get } from '../database';
import rateLimit from 'express-rate-limit';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Demasiados intentos, intente más tarde' }
});

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
    const existing = await get('SELECT id FROM users WHERE email = ?', [email]);
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

    const result = await run(
      'INSERT INTO users (firstName, lastName, nickname, email, password) VALUES (?, ?, ?, ?, ?)',
      [firstName, lastName, nickname || null, email, hashedPassword]
    );

    const token = jwt.sign({ userId: result.lastID }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      token,
      user: { id: result.lastID, firstName, lastName, nickname, email }
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
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

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    const expiresAt = new Date(Date.now() + 3600000).toISOString();

    await run('INSERT INTO password_resets (userId, token, expiresAt) VALUES (?, ?, ?)',
      [user.id, token, expiresAt]);

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
