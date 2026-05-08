import { Router, Request, Response } from 'express';
import { AuthRequest, authenticateToken } from '../middleware/auth';
import { run, get, all } from '../database';

const router = Router();

router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const progress = await all(
      'SELECT topicId, completed FROM progress WHERE userId = ?',
      [req.userId]
    );

    const user = await get(
      'SELECT xp, level, streak FROM users WHERE id = ?',
      [req.userId]
    );

    res.json({
      completedTopics: progress.filter(p => p.completed).map(p => p.topicId),
      xp: user.xp,
      level: user.level,
      streak: user.streak
    });
  } catch (error: any) {
    console.error('Error in GET /progress:', error);
    res.status(500).json({ error: 'Error interno del servidor', details: error.message });
  }
});

router.post('/topic/:topicId', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { topicId } = req.params;
  const { completed } = req.body;

  try {
    if (completed) {
      const existing = await get(
        'SELECT id FROM progress WHERE userId = ? AND topicId = ?',
        [req.userId, topicId]
      );

      if (!existing) {
        await run(
          'INSERT INTO progress (userId, topicId, completed, completedAt) VALUES (?, ?, 1, ?)',
          [req.userId, topicId, new Date().toISOString()]
        );

        await run('UPDATE users SET xp = xp + 10 WHERE id = ?', [req.userId]);
      }
    }

    const user = await get('SELECT xp, level FROM users WHERE id = ?', [req.userId]);
    const newLevel = Math.floor(user.xp / 100) + 1;

    if (newLevel > user.level) {
      await run('UPDATE users SET level = ? WHERE id = ?', [newLevel, req.userId]);
    }

    res.json({ success: true });
  } catch (error: any) {
    console.error('Error in POST /progress/topic:', error);
    res.status(500).json({ error: 'Error interno del servidor', details: error.message });
  }
});

router.post('/quiz', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { topicId, score, totalQuestions } = req.body;

  try {
    await run(
      'INSERT INTO quiz_results (userId, topicId, score, totalQuestions) VALUES (?, ?, ?, ?)',
      [req.userId, topicId, score, totalQuestions]
    );

    const xpGained = score === totalQuestions ? 20 : 5;
    await run('UPDATE users SET xp = xp + ? WHERE id = ?', [xpGained, req.userId]);

    const user = await get('SELECT xp, level FROM users WHERE id = ?', [req.userId]);
    const newLevel = Math.floor(user.xp / 100) + 1;

    if (newLevel > user.level) {
      await run('UPDATE users SET level = ? WHERE id = ?', [newLevel, req.userId]);
    }

    res.json({ success: true, xpGained });
  } catch (error: any) {
    console.error('Error in POST /quiz:', error);
    res.status(500).json({ error: 'Error interno del servidor', details: error.message });
  }
});

export default router;
