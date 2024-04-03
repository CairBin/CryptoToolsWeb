import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/apiSer': {
        target: 'https://localhost:9000/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/apiSer/, '')
      }
    }
  }
})
