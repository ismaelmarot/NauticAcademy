import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthProvider, useAuth } from '@/context/AuthContext'
import { ThemeLanguageProvider, useThemeLanguage } from '@/context/ThemeLanguageContext'
import './index.css'

import {
  Home,
  Profile,
  Chapter,
  Section,
  Topic,
  Quiz,
  Practice,
} from '@/pages'
import styled from 'styled-components'

const LoadingContainer = styled.div<{ $theme: any }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $theme }) => $theme.colors.background};
  color: ${({ $theme }) => $theme.colors.text};
`

const AppRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { user, loading } = useAuth()
  const { theme } = useThemeLanguage()

  if (loading) {
    return <LoadingContainer $theme={theme}>Cargando...</LoadingContainer>
  }

  if (!user) {
    return <LoadingContainer $theme={theme}>Error al cargar usuario</LoadingContainer>
  }

  return <>{element}</>
}

const routes = [
  { path: '/', element: <AppRoute element={<Home />} /> },
  { path: '/profile', element: <AppRoute element={<Profile />} /> },
  { path: '/chapter/:chapterId', element: <AppRoute element={<Chapter />} /> },
  { path: '/chapter/:chapterId/section/:sectionId', element: <AppRoute element={<Section />} /> },
  { path: '/topic/:topicId', element: <AppRoute element={<Topic />} /> },
  { path: '/quiz/:topicId', element: <AppRoute element={<Quiz />} /> },
  { path: '/practice', element: <AppRoute element={<Practice />} /> },
]

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
  },
})

const App: React.FC = () => {
  const { theme } = useThemeLanguage()

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeLanguageProvider>
        <App />
      </ThemeLanguageProvider>
    </AuthProvider>
  </React.StrictMode>
)
