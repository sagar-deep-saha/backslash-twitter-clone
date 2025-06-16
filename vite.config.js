import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 5177,
    host: true,
    allowedHosts: [
      'backslash-twitter-clone.onrender.com',
      'backslash-twitter-clone-five.vercel.app',
      'localhost',
      '127.0.0.1'
    ],
    proxy: {
      '/api': {
        // target: 'http://localhost:8001',
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
