import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import babel from 'vite-babel-plugin'
import path from 'path'

export default defineConfig({
  plugins: [vue(), babel()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
