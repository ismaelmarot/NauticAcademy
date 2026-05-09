import React from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from './useLogin'
import {
  Button,
  Card,
  Container,
  ErrorMsg,
  Input,
  LinkText,
  Title
} from './Login.styles'

const Login: React.FC = () => {
  const {
    theme,
    t,

    email,
    setEmail,

    password,
    setPassword,

    error,

    loading,

    handleSubmit,
  } = useLogin()

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
  )
}

export default Login