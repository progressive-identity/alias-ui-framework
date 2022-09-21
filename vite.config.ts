import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'alias-ui-framework',
      fileName: (format) => `alias-ui-framework.${format}.js`,
    },
    outDir: path.resolve(__dirname, 'dist/lib'),
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      outputDir: path.resolve(__dirname, 'dist/types'),
    }),
  ],
})
