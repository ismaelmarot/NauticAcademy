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
  padding: ${({ $theme }) => $theme.spacing[16]};
`;

const Card = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: ${({ $theme }) => $theme.radius.md};
  padding: ${({ $theme }) => $theme.spacing[32]};
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1<{ $theme: any }>`
  font-family: ${({ $theme }) => $theme.typography.fontFamily.headline};
  font-size: ${({ $theme }) => $theme.typography.fontSize.heading};
  line-height: ${({ $theme }) => $theme.typography.lineHeight.heading};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.heading};
  color: ${({ $theme }) => $theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ $theme }) => $theme.spacing[16]};
`;

const Subtitle = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textBody};
  text-align: center;
  margin-bottom: ${({ $theme }) => $theme.spacing[24]};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};
`;

const Input = styled.input<{ $theme: any }>`
  width: 100%;
  padding: 12px ${({ $theme }) => $theme.spacing[16]};
  margin: 8px 0;
  border: 2px solid ${({ $theme }) => $theme.colors.border};
  border-radius: ${({ $theme }) => $theme.radius.md};
  background: ${({ $theme }) => $theme.colors.background};
  color: ${({ $theme }) => $theme.colors.text};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.medium};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};

  &:focus {
    outline: none;
    border-color: ${({ $theme }) => $theme.colors.primary};
  }

  &::placeholder {
    color: ${({ $theme }) => $theme.colors.textDisabled};
  }
`;

const Button = styled.button<{ $theme: any }>`
  width: 100%;
  padding: 14px;
  margin: ${({ $theme }) => $theme.spacing[16]} 0 8px;
  border: none;
  border-radius: ${({ $theme }) => $theme.radius.md};
  background: ${({ $theme }) => $theme.button.primaryBg};
  color: ${({ $theme }) => $theme.button.primaryText};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  box-shadow: ${({ $theme }) => $theme.button.primaryShadow};
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s;

  &:hover {
    opacity: 0.95;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: ${({ $theme }) => $theme.button.primaryActiveShadow};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: ${({ $theme }) => $theme.button.primaryShadow};
  }
`;

const Message = styled.p<{ $theme: any; $error?: boolean }>`
  color: ${({ $theme, $error }) => $error ? $theme.colors.error : $theme.colors.success};
  text-align: center;
  margin: 8px 0;
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
`;

const LinkText = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textBody};
  text-align: center;
  margin-top: ${({ $theme }) => $theme.spacing[16]};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};

  a {
    color: ${({ $theme }) => $theme.colors.secondary};
    font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
    text-decoration: underline;
    text-underline-offset: 2px;
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
