import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'alias-ui-framework',
      fileName: (format) => `alias-ui-framework.${format}.js`
    },
    outDir: path.resolve(__dirname, 'dist/lib'),
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()]
})

