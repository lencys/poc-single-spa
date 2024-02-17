import { defineConfig } from 'vite'
import vitePluginSingleSpa from 'vite-plugin-single-spa';

export default function (opts) {
    return defineConfig({
        plugins: [vitePluginSingleSpa({
            type: 'mife',
            serverPort: 4103
        })],
    });
};
