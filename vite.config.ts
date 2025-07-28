import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: true, //permitir acesso externo
    port: 5173,
    strictPort: true,
    // Permitir subdomínios locais customizados
    watch: {},
    // para que o vite aceite conexões nesses hosts
    fs: {
      strict: false,
    },
  },
})
