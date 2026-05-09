import React from 'react'
import { Link } from 'react-router-dom'
import { useRegister } from './useRegister'
import {
  Button,
  Card,
  Container,
  ErrorMsg,
  Input,
  LinkText,
  Title
} from './Register.styles'

const Register: React.FC = () => {
  const {
    theme,
    t,

    formData,
    error,
    loading,

    handleChange,
    handleSubmit
  } = useRegister()

  return (
    <Container $theme={theme}>
      <Card $theme={theme}>
        <Title $theme={theme}>
          {t('register')}
        </Title>

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

          {error && (
            <ErrorMsg $theme={theme}>
              {error}
            </ErrorMsg>
          )}

          <Button
            $theme={theme}
            type="submit"
            disabled={loading}
          >
            {loading
              ? t('loading')
              : t('register')}
          </Button>
        </form>

        <LinkText $theme={theme}>
          {t('hasAccount')}{' '}
          <Link to="/login">
            {t('login')}
          </Link>
        </LinkText>
      </Card>
    </Container>
  )
}

export default Register