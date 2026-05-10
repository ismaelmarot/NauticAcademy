import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['images/app_icons/app-icon.png'],
      manifest: {
        name: 'NauticAcademy',
        short_name: 'NauticAc',
        description: 'Plataforma de aprendizaje náutico',
        theme_color: '#071013',
        background_color: '#071013',
        display: 'standalone',
        icons: [
          {
            src: '/images/app_icons/app-icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/app_icons/app-icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
