import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dra/',  // Path to the subfolder (for GitHub Pages)
  build: {
    outDir: 'dist',  // Ensure that this is where Vite will build the output
  },
});
