import { defineConfig } from 'vite'
import vitePluginSingleSpa from 'vite-plugin-single-spa';

export default defineConfig({
    plugins: [vitePluginSingleSpa({
        type: 'mife',
        serverPort: 4103
    })],
    base: 'http://localhost:4103/'
});
