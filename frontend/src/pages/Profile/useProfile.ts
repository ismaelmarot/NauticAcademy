import { useNavigate } from 'react-router-dom'
import { useAuth, useThemeLanguage } from '@/context'

export const useProfile = () => {
  const { theme, t } = useThemeLanguage()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

  const goToLogin = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    logout()
  }

  const initials =
    (user?.firstName?.[0] || 'U').toUpperCase()

  return {
    theme,
    t,
    user,
    initials,

    goBack,
    goToLogin,
    handleLogout
  }
}