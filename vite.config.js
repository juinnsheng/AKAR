import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change 'akar-connect' below to your exact GitHub repo name.
// GitHub Pages serves project sites at https://<user>.github.io/<repo-name>/
// so Vite needs to know that sub-path at build time.
export default defineConfig({
  plugins: [react()],
  base: '/akar-connect/',
})
