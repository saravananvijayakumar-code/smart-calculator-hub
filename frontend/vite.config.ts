import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      '~backend/client': path.resolve(__dirname, './client'),
      '~backend/ai-analysis/types': path.resolve(__dirname, './types/ai-analysis'),
      '~backend/au-tax/types': path.resolve(__dirname, './types/au-tax'),
      '~backend/exchange/types': path.resolve(__dirname, './types/exchange'),
    },
  },
  plugins: [tailwindcss(), react()],
  mode: "development",
  build: {
    minify: false,
  }
})
