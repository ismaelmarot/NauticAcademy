import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

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

interface AuthContextType {
  user: User | null;
  loading: boolean;
  updateUser: (updates: Partial<User>) => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/user/me')
      .then(res => res.json())
      .then(data => {
        setUser({ ...data, emailVerified: !!data.emailVerified });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser(prev => {
      if (!prev) return null;
      return { ...prev, ...updates };
    });
  }, []);

  const refreshUser = useCallback(async () => {
    try {
      const res = await fetch('/api/user/me');
      const data = await res.json();
      setUser(prev => prev ? { ...prev, ...data, emailVerified: !!data.emailVerified } : null);
    } catch (error) {
      console.error('Failed to refresh user:', error);
    }
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
