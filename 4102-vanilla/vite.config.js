import { defineConfig } from 'vite';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vitePluginSingleSpa(
        {
            type: 'mife',
            serverPort: 4102,
            assetFileNames: `[name].[ext]`,
            spaEntryPoints: ['src/spa.js'],
        }
    )],
    base: 'http://localhost:4102/'
});
