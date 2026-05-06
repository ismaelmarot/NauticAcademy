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

export interface RegisterData {
  firstName: string;
  lastName: string;
  nickname?: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    nickname?: string;
    email: string;
    xp?: number;
    level?: number;
    streak?: number;
  };
}

export const register = async (data: RegisterData): Promise<AuthResponse> => {
  const res = await api.post('/auth/register', data);
  return res.data;
};

export const login = async (data: LoginData): Promise<AuthResponse> => {
  const res = await api.post('/auth/login', data);
  return res.data;
};

export const forgotPassword = async (email: string): Promise<{ message: string }> => {
  const res = await api.post('/auth/forgot-password', { email });
  return res.data;
};

export const resetPassword = async (token: string, password: string): Promise<{ message: string }> => {
  const res = await api.post('/auth/reset-password', { token, password });
  return res.data;
};
