import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';
import { forgotPassword } from '@/api/auth';

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
  margin-bottom: 16px;
  font-size: 28px;
`;

const Subtitle = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  text-align: center;
  margin-bottom: 24px;
  font-size: 14px;
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

  &:disabled {
    opacity: 0.5;
  }
`;

const Message = styled.p<{ $theme: any; $error?: boolean }>`
  color: ${({ $theme, $error }) => $error ? $theme.colors.error : $theme.colors.success};
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

const ForgotPassword: React.FC = () => {
  const { theme, t } = useThemeLanguage();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      await forgotPassword(email);
      setMessage(t('success'));
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container $theme={theme}>
      <Card $theme={theme}>
        <Title $theme={theme}>{t('forgotPassword')}</Title>
        <Subtitle $theme={theme}>Ingresa tu email para recibir instrucciones</Subtitle>
        <form onSubmit={handleSubmit}>
          <Input
            $theme={theme}
            type="email"
            placeholder={t('email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <Message $theme={theme} $error>{error}</Message>}
          {message && <Message $theme={theme}>{message}</Message>}
          <Button $theme={theme} type="submit" disabled={loading}>
            {loading ? t('loading') : t('sendInstructions')}
          </Button>
        </form>
        <LinkText $theme={theme}>
          <Link to="/login">{t('backToLogin')}</Link>
        </LinkText>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
