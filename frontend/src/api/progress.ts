const STORAGE_KEY = 'nautic-data';

interface LocalData {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    nickname?: string;
    email: string;
    emailVerified: boolean;
    xp: number;
    level: number;
    streak: number;
  };
  completedTopics: string[];
}

function loadData(): LocalData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    user: {
      id: 1,
      firstName: 'Invitado',
      lastName: '',
      nickname: 'invitado',
      email: 'guest@nauticacademy.com',
      emailVerified: true,
      xp: 0,
      level: 1,
      streak: 0,
    },
    completedTopics: [],
  };
}

function saveData(data: LocalData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export interface ProgressData {
  completedTopics: string[];
  xp: number;
  level: number;
  streak: number;
}

export const getProgress = async (): Promise<ProgressData> => {
  const data = loadData();
  return {
    completedTopics: data.completedTopics,
    xp: data.user.xp,
    level: data.user.level,
    streak: data.user.streak,
  };
};

export const completeTopic = async (topicId: string): Promise<void> => {
  const data = loadData();
  if (!data.completedTopics.includes(topicId)) {
    data.completedTopics.push(topicId);
    data.user.xp += 10;
    data.user.level = Math.floor(data.user.xp / 100) + 1;
    saveData(data);
  }
};

export const submitQuizResult = async (
  _topicId: string,
  score: number,
  totalQuestions: number
): Promise<{ success: boolean; xpGained: number }> => {
  const data = loadData();
  const xpGained = score === totalQuestions ? 20 : 5;
  data.user.xp += xpGained;
  data.user.level = Math.floor(data.user.xp / 100) + 1;
  saveData(data);
  return { success: true, xpGained };
};
