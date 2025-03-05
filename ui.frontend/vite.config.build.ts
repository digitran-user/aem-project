
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Tailwind is processed here
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'AEMReactComponents',
      formats: ['iife'],
      fileName: (format) => `aem-react-components.${format}.js`,
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Check if the asset is a CSS file by its extension
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'aem-react-components.css'; // Force CSS output name
          }
          // Fallback for other assets (e.g., images, fonts)
          return assetInfo.name ?? 'assets/[name][extname]';
        },
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});