import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig(({ command }) => ({
  plugins: [solidPlugin()],
  server: {
    port: 5177,
    host: true,
    allowedHosts: [
      'backslash-twitter-clone.onrender.com',
      'backslash-twitter-clone-five.vercel.app',
      'back-slash-front-ui.vercel.app',
      'localhost',
      '127.0.0.1'
    ],
    proxy: {
      '/api': {
        target: command === 'serve' 
          ? 'http://localhost:8001'
          : 'https://backslash-twitter-back-xi.vercel.app',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  css: {
    postcss: './postcss.config.cjs'
  }
}))
