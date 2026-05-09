import { useState } from 'react'

import {
  useNavigate
} from 'react-router-dom'

import {
  useThemeLanguage,
  useAuth
} from '@/context'

export const useLogin = () => {
  const { theme, t } =
    useThemeLanguage()

  const { login } =
    useAuth()

  const navigate =
    useNavigate()

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
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

    setLoading(true)

    try {
      await login(
        email,
        password
      )

      navigate('/')
    } catch (err: any) {
      setError(
        err.response?.data?.error ||
        'Error al iniciar sesión'
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

    password,
    setPassword,

    error,

    loading,

    handleSubmit,
  }
}