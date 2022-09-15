import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'tailwind-presets.cjs'),
      name: 'alias-ui-framework-presets',
      fileName: (format) => `alias-ui-framework.${format}.js`
    },
    outDir: path.resolve(__dirname, 'dist/lib')
  }
})

