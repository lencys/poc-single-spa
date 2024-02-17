import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginSingleSpa({
    type: 'mife',
    serverPort: 4104,
    assetFileNames: `[name].[ext]`,
  })],
  base: 'http://localhost:4104/'
})
