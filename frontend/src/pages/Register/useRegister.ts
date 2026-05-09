import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useThemeLanguage, useAuth } from '@/context'

export const useRegister = () => {
  const { theme, t } = useThemeLanguage()
  const { register } = useAuth()

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    setError('')

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError('Las contraseñas no coinciden')
      return
    }

    setLoading(true)

    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        nickname:
          formData.nickname || undefined,
        email: formData.email,
        password: formData.password
      })

      navigate('/')
    } catch (err: any) {
      setError(
        err.response?.data?.error ||
          'Error al registrarse'
      )
    } finally {
      setLoading(false)
    }
  }

  return {
    theme,
    t,

    formData,
    error,
    loading,

    handleChange,
    handleSubmit
  }
}