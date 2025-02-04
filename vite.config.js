import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.STRIPE_PUBLISH_KEY': JSON.stringify(env.STRIPE_PUBLISH_KEY)
    },
    plugins: [react()],
    server:{
      proxy: {
        '/api': {
          target: 'https://hashsports-server-hmcxdehwapcwa2a4.canadacentral-01.azurewebsites.net',
        },
      },
    }
  }
})
