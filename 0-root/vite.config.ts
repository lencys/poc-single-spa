import { defineConfig } from 'vite'
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vitePluginSingleSpa({
        type: 'root'
    })]
})