import { Router, Request, Response } from 'express';
import { AuthRequest, authenticateToken } from '../middleware/auth';
import { get, run } from '../database';

const router = Router();

router.get('/me', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const user = await get(
      'SELECT id, firstName, lastName, nickname, email, xp, level, streak, language, theme FROM users WHERE id = ?',
      [req.userId]
    );

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.put('/me', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { firstName, lastName, nickname, language, theme } = req.body;

  try {
    if (nickname) {
      const existing = await get(
        'SELECT id FROM users WHERE nickname = ? AND id != ?',
        [nickname, req.userId]
      );
      if (existing) {
        return res.status(409).json({ error: 'El nickname ya está en uso' });
      }
    }

    await run(
      'UPDATE users SET firstName = ?, lastName = ?, nickname = ?, language = ?, theme = ?, updatedAt = ? WHERE id = ?',
      [firstName, lastName, nickname, language, theme, new Date().toISOString(), req.userId]
    );

    const user = await get(
      'SELECT id, firstName, lastName, nickname, email, xp, level, streak, language, theme FROM users WHERE id = ?',
      [req.userId]
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;
