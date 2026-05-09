import { useState } from 'react'
import { forgotPassword } from '@/api/auth'
import { useThemeLanguage } from '@/context'

export const useForgotPassword = () => {
  const { theme, t } =
    useThemeLanguage()

  const [email, setEmail] =
    useState('')

  const [message, setMessage] =
    useState('')

  const [error, setError] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    setError('')
    setMessage('')

    setLoading(true)

    try {
      await forgotPassword(email)

      setMessage(t('success'))
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

    email,
    setEmail,

    message,
    error,

    loading,

    handleSubmit,
  }
}