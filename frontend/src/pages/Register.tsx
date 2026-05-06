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

const Register: React.FC = () => {
  const { theme, t } = useThemeLanguage();
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);

    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        nickname: formData.nickname || undefined,
        email: formData.email,
        password: formData.password
      });
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al registrarse');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container $theme={theme}>
      <Card $theme={theme}>
        <Title $theme={theme}>{t('register')}</Title>
        <form onSubmit={handleSubmit}>
          <Input
            $theme={theme}
            name="firstName"
            placeholder={t('firstName')}
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            $theme={theme}
            name="lastName"
            placeholder={t('lastName')}
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <Input
            $theme={theme}
            name="nickname"
            placeholder={t('nickname')}
            value={formData.nickname}
            onChange={handleChange}
          />
          <Input
            $theme={theme}
            name="email"
            type="email"
            placeholder={t('email')}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            $theme={theme}
            name="password"
            type="password"
            placeholder={t('password')}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            $theme={theme}
            name="confirmPassword"
            type="password"
            placeholder={t('confirmPassword')}
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {error && <ErrorMsg $theme={theme}>{error}</ErrorMsg>}
          <Button $theme={theme} type="submit" disabled={loading}>
            {loading ? t('loading') : t('register')}
          </Button>
        </form>
        <LinkText $theme={theme}>
          {t('hasAccount')} <Link to="/login">{t('login')}</Link>
        </LinkText>
      </Card>
    </Container>
  );
};

export default Register;
