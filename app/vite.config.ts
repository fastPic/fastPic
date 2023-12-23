import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';
import { join, resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: [
      { find: /^@kuaitu\/core/, replacement: join(__dirname, '../packages/core/lib/main.ts') },
    ],
  },
})
