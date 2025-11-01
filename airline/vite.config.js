import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // use global test APIs like describe, it
    environment: 'jsdom',    // for React component testing
    setupFiles: './src/setupTests.ts', // optional setup file
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
})
