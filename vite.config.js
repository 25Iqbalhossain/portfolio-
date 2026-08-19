import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  server: {
    fs: {
      allow: [__dirname]
    }
  }
})
