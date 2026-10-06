import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/react-router-dom') || id.includes('node_modules/react-router')) {
            return 'router';
          }
        },
      },
    },
    cssCodeSplit: true,
    // Vite 8 uses oxc minifier by default (faster than esbuild) — no need to specify
    sourcemap: false,
    chunkSizeWarningLimit: 500,
  },
})
