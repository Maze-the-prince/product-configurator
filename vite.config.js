import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'docs',
    emptyOutDir: false,
    assetsDir: 'build',
    rollupOptions: {
      input: path.join(root, 'index.html')
    }
  },
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://127.0.0.1:8080',
      '/frontendapi': 'http://127.0.0.1:8080'
    }
  }
});
