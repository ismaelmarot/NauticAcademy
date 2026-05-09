import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useThemeLanguage } from '@/context'
import { resetPassword } from '@/api/auth'

export const useResetPassword = () => {
  const { theme, t } = useThemeLanguage()

  const navigate = useNavigate()

  const [token] = useState(
    new URLSearchParams(
      window.location.search
    ).get('token') || ''
  )

  const [password, setPassword] =
    useState('')

  const [
    confirmPassword,
    setConfirmPassword
  ] = useState('')

  const [message, setMessage] =
    useState('')

  const [error, setError] = useState('')

  const [loading, setLoading] =
    useState(false)

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    setError('')
    setMessage('')

    if (password !== confirmPassword) {
      setError(
        'Las contraseñas no coinciden'
      )

      return
    }

    setLoading(true)

    try {
      await resetPassword(
        token,
        password
      )

      setMessage(t('success'))

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err: any) {
      setError(
        err.response?.data?.error ||
          'Error'
      )
    } finally {
      setLoading(false)
    }
  }

  return {
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
  }
}