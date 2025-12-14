// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Ganti 'nama-repo' dengan nama folder repository GitHub Anda
  base: '/praktik-8/', 
  plugins: [react()],
})