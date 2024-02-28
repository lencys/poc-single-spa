import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

export default defineConfig({
  plugins: [react(), vitePluginSingleSpa({
    type: 'root',
    imo: '3.1.0'
  })]
});
