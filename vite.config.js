import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/jefflu2/',
  plugins: [react()],
  server: {
    historyApiFallback: true
  }
})

