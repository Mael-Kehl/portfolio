import { defineConfig, BuildOptions } from 'vite'
import vue from '@vitejs/plugin-vue'
const {resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '',
  build: {
    outDir: './build',
    chunkSizeWarningLimit: 10000,
  },
  // rollupOptions: {
  //   rocket: resolve(__dirname, './src/assets/models/rocket.gltf'),
  // }
})
