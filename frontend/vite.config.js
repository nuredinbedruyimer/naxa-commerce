import { defineConfig } from 'vite';
import path from 'path'; // Fix: Correctly import 'path'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") // Fix: Correct the path for alias
    },
  },
});

