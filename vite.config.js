import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Add this line
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add this line
  ],
  base: '/portfolio/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
