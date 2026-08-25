import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Porta dedicada ao site da NuvemNet, para não competir com outros projetos Vite.
    port: 5180,
    strictPort: true,
    open: true,
  },
  preview: {
    port: 5180,
  },
});
