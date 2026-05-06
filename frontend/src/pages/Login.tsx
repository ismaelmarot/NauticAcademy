import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';
import { useAuth } from '@/context/AuthContext';

const Container = styled.div<{ $theme: any }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ $theme }) => $theme.colors.background};
  padding: 16px;
`;

const Card = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const Title = styled.h1<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.primary};
  text-align: center;
  margin-bottom: 24px;
  font-size: 28px;
`;

const Input = styled.input<{ $theme: any }>`
  width: 100%;
  padding: 12px 16px;
  margin: 8px 0;
  border: 2px solid ${({ $theme }) => $theme.colors.border};
  border-radius: 8px;
  background: ${({ $theme }) => $theme.colors.background};
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 16px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ $theme }) => $theme.colors.primary};
  }
`;

const Button = styled.button<{ $theme: any }>`
  width: 100%;
  padding: 14px;
  margin: 16px 0 8px;
  border: none;
  border-radius: 8px;
  background: ${({ $theme }) => $theme.colors.primary};
  color: ${({ $theme }) => $theme.colors.background};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.error};
  text-align: center;
  margin: 8px 0;
  font-size: 14px;
`;

const LinkText = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  text-align: center;
  margin-top: 16px;
  font-size: 14px;

  a {
    color: ${({ $theme }) => $theme.colors.primary};
    font-weight: 600;
  }
`;

const Login: React.FC = () => {
  const { theme, t } = useThemeLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container $theme={theme}>
      <Card $theme={theme}>
        <Title $theme={theme}>{t('login')}</Title>
        <form onSubmit={handleSubmit}>
          <Input
            $theme={theme}
            type="email"
            placeholder={t('email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            $theme={theme}
            type="password"
            placeholder={t('password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <ErrorMsg $theme={theme}>{error}</ErrorMsg>}
          <Button $theme={theme} type="submit" disabled={loading}>
            {loading ? t('loading') : t('login')}
          </Button>
        </form>
        <LinkText $theme={theme}>
          <Link to="/forgot-password">{t('forgotPassword')}</Link>
        </LinkText>
        <LinkText $theme={theme}>
          {t('noAccount')} <Link to="/register">{t('register')}</Link>
        </LinkText>
      </Card>
    </Container>
  );
};

export default Login;
