import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,         // allows using "describe", "it", "expect" globally
    environment: 'jsdom',  // simulates browser-like env
    setupFiles: './src/setupTests.js', // optional setup file
    coverage: {
    provider: 'v8',
    reporter: ['text', 'html'],
  },
  },
})
