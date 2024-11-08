import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'microfront',
      filename: 'remoteEntry.js',
      exposes: {
        './List': './src/components/List.tsx',
        './Input': './src/components/Input.tsx',
        './ProfileImage': './src/components/ProfileImage.tsx',
      },
      shared: ['react'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
