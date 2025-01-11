import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    historyApiFallback: true, // Enables fallback to index.html
},plugins: [react()],
})
