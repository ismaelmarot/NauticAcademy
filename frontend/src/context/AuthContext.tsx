import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

const STORAGE_KEY = 'nautic-data';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  nickname?: string;
  email: string;
  emailVerified: boolean;
  xp: number;
  level: number;
  streak: number;
}

interface LocalData {
  user: User;
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

interface AuthContextType {
  user: User | null;
  loading: boolean;
  updateUser: (updates: Partial<User>) => void;
  refreshUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = loadData();
    setUser(data.user);
    setLoading(false);
  }, []);

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser(prev => {
      if (!prev) return null;
      const updated = { ...prev, ...updates };
      const data = loadData();
      data.user = updated;
      saveData(data);
      return updated;
    });
  }, []);

  const refreshUser = useCallback(() => {
    const data = loadData();
    setUser(data.user);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, updateUser, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
