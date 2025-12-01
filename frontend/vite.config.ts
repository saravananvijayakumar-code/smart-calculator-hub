import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      '~backend/client': path.resolve(__dirname, './client'),
      '~backend': path.resolve(__dirname, '../backend'),
    },
  },
  plugins: [tailwindcss(), react()],
  mode: mode || 'development',
  build: {
    minify: mode === 'production' ? 'terser' : false,
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI libraries
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select', '@radix-ui/react-tabs'],
          // Charts and visualization
          'charts-vendor': ['recharts'],
          // Utilities
          'utils-vendor': ['decimal.js', 'framer-motion', 'lucide-react'],
          // Internationalization
          'i18n-vendor': ['i18next', 'i18next-browser-languagedetector', 'react-i18next'],
        },
        // Calculator chunks by category
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()
            : 'chunk';

          if (facadeModuleId?.includes('calculators/health/')) {
            return 'assets/health-calculators-[hash].js';
          }
          if (facadeModuleId?.includes('calculators/financial/')) {
            return 'assets/financial-calculators-[hash].js';
          }
          if (facadeModuleId?.includes('calculators/math/')) {
            return 'assets/math-calculators-[hash].js';
          }
          if (facadeModuleId?.includes('calculators/utility/')) {
            return 'assets/utility-calculators-[hash].js';
          }
          if (facadeModuleId?.includes('calculators/us/')) {
            return 'assets/us-calculators-[hash].js';
          }
          if (facadeModuleId?.includes('calculators/uk/')) {
            return 'assets/uk-calculators-[hash].js';
          }
          if (facadeModuleId?.includes('calculators/insurance/')) {
            return 'assets/insurance-calculators-[hash].js';
          }

          return 'assets/[name]-[hash].js';
        },
      },
    },
    // Performance budgets
    chunkSizeWarningLimit: 1000, // Warn if chunks exceed 1000kb
  },
  // Performance monitoring
  define: {
    __DEV__: mode === 'development',
  },
}))
