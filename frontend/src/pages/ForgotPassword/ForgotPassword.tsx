import React from 'react'
import { Link } from 'react-router-dom'
import { useForgotPassword } from './useForgotPassword'
import {
  Button,
  Card,
  Container,
  Input,
  LinkText,
  Message,
  Subtitle,
  Title
} from './ForgotPassword.styles'

const ForgotPassword: React.FC = () => {
  const {
    theme,
    t,

    email,
    setEmail,

    message,
    error,

    loading,

    handleSubmit,
  } = useForgotPassword()

  return (
    <Container $theme={theme}>
      <Card $theme={theme}>
        <Title $theme={theme}>
          {t('forgotPassword')}
        </Title>

        <Subtitle $theme={theme}>
          Ingresa tu email para
          recibir instrucciones
        </Subtitle>

        <form onSubmit={handleSubmit}>
          <Input
            $theme={theme}
            type='email'
            placeholder={t('email')}
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
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
            type='submit'
            disabled={loading}
          >
            {loading
              ? t('loading')
              : t('sendInstructions')}
          </Button>
        </form>

        <LinkText $theme={theme}>
          <Link to='/login'>
            {t('backToLogin')}
          </Link>
        </LinkText>
      </Card>
    </Container>
  )
}

export default ForgotPassword