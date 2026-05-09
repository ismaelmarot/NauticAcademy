import React from 'react'
import { Link } from 'react-router-dom'
import { useResetPassword } from './useResetPassword'
import {
  Container,
  Card,
  Title,
  Input,
  Message,
  Button,
  LinkText
} from './ResetPassword.styles'

const ResetPassword: React.FC = () => {
  const {
    theme,
    t,

    password,
    confirmPassword,

    message,
    error,
    loading,

    setPassword,
    setConfirmPassword,

    handleSubmit
  } = useResetPassword()

  return (
    <Container $theme={theme}>
      <Card $theme={theme}>
        <Title $theme={theme}>
          {t('resetPassword')}
        </Title>

        <form onSubmit={handleSubmit}>
          <Input
            $theme={theme}
            type="password"
            placeholder={t('password')}
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <Input
            $theme={theme}
            type="password"
            placeholder={t('confirmPassword')}
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            required
          />

          {error && (
            <Message
              $theme={theme}
              $error
            >
              {error}
            </Message>
          )}

          {message && (
            <Message $theme={theme}>
              {message}
            </Message>
          )}

          <Button
            $theme={theme}
            type="submit"
            disabled={loading}
          >
            {loading
              ? t('loading')
              : t('save')}
          </Button>
        </form>

        <LinkText $theme={theme}>
          <Link to="/login">
            {t('backToLogin')}
          </Link>
        </LinkText>
      </Card>
    </Container>
  )
}

export default ResetPassword