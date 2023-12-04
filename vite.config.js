import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://trine-marie-sandberg.github.io/portfolio/",
  plugins: [react()]
})
//deploy using gh-pages library: https://medium.com/@arifiansaputra43/how-to-host-vite-react-in-github-pages-with-gh-pages-a8a0566c493f