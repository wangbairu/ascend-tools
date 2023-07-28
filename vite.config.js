import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    assetsDir: 'static'
  },
  plugins: [
    vue(),
  ],
  server: {
    proxy: {
      // 将需要解决跨域问题的请求代理到目标地址
      '/api': {
        target: 'http://121.41.107.124:8000/',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
