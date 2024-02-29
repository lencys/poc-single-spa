import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

export default defineConfig({
  plugins: [svelte(), vitePluginSingleSpa({
    serverPort: 4202,
    spaEntryPoints: 'src/parcels.ts',
    cssStrategy: 'multiMife'
  })],
  base: 'http://localhost:4202'
});
