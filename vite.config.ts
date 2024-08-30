import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port番号を指定
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ここで `@` を `src` にマッピング
    },
  },
})
