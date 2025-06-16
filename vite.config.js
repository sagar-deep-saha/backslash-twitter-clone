import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: [
      'backslash-twitter-clone.onrender.com',
      'localhost',
      '127.0.0.1'
    ],
    proxy: {
      '/api': {
        target: 'https://backslash-twitter-back-xi.vercel.app',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    target: 'esnext',
  },
  css: {
    postcss: './postcss.config.cjs'
  }
})
