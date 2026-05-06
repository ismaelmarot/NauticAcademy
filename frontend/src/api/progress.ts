import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('nautic-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface ProgressData {
  completedTopics: string[];
  xp: number;
  level: number;
  streak: number;
}

export const getProgress = async (): Promise<ProgressData> => {
  const res = await api.get('/progress');
  return res.data;
};

export const completeTopic = async (topicId: string): Promise<void> => {
  await api.post(`/progress/topic/${topicId}`, { completed: true });
};

export const submitQuizResult = async (
  topicId: string,
  score: number,
  totalQuestions: number
): Promise<{ success: boolean; xpGained: number }> => {
  const res = await api.post('/progress/quiz', { topicId, score, totalQuestions });
  return res.data;
};
