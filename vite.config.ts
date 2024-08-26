import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port番号を指定
    port: 3000,
    host: true,
  },
  optimizeDeps: {
    exclude: ['chunk-NGHSDRWQ']
  }
})
