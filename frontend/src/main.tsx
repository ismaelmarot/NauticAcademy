import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, RouteObject, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { ThemeLanguageProvider, useThemeLanguage } from '@/context/ThemeLanguageContext';
import './index.css';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import Profile from '@/pages/Profile';
import Chapter from '@/pages/Chapter';
import Section from '@/pages/Section';
import Topic from '@/pages/Topic';
import Quiz from '@/pages/Quiz';
import Practice from '@/pages/Practice';
import styled from 'styled-components';

const LoadingContainer = styled.div<{ $theme: any }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $theme }) => $theme.colors.background};
  color: ${({ $theme }) => $theme.colors.text};
`;

const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { user, loading } = useAuth();
  const { theme } = useThemeLanguage();

  if (loading) {
    return <LoadingContainer $theme={theme}>Cargando...</LoadingContainer>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{element}</>;
};

const PublicRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { user, loading } = useAuth();
  const { theme } = useThemeLanguage();

  if (loading) {
    return <LoadingContainer $theme={theme}>Cargando...</LoadingContainer>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{element}</>;
};

const routes: RouteObject[] = [
  { path: '/login', element: <PublicRoute element={<Login />} /> },
  { path: '/register', element: <PublicRoute element={<Register />} /> },
  { path: '/forgot-password', element: <PublicRoute element={<ForgotPassword />} /> },
  { path: '/reset-password', element: <PublicRoute element={<ResetPassword />} /> },
  { path: '/', element: <ProtectedRoute element={<Home />} /> },
  { path: '/profile', element: <ProtectedRoute element={<Profile />} /> },
  { path: '/chapter/:chapterId', element: <ProtectedRoute element={<Chapter />} /> },
  { path: '/chapter/:chapterId/section/:sectionId', element: <ProtectedRoute element={<Section />} /> },
  { path: '/topic/:topicId', element: <ProtectedRoute element={<Topic />} /> },
  { path: '/quiz/:topicId', element: <ProtectedRoute element={<Quiz />} /> },
  { path: '/practice', element: <ProtectedRoute element={<Practice />} /> },
];

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  const { theme } = useThemeLanguage();

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeLanguageProvider>
        <App />
      </ThemeLanguageProvider>
    </AuthProvider>
  </React.StrictMode>
);
