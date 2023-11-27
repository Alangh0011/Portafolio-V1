import { defineConfig } from 'vite';
import ViteReact from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'docs', // Carpeta de salida para producción
  },
  plugins: [ViteReact()],
  server: {
    fs: {
      strict: false,
    },
  },
});
