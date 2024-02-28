import Welcome from "./lib/Welcome.svelte";
// @ts-expect-error
import singleSpaSvelte from 'single-spa-svelte';
import { cssLifecycleFactory } from 'vite-plugin-single-spa/ex';

const lc = singleSpaSvelte({
    component: Welcome
});

const cssLc = cssLifecycleFactory('spa');
export const welcomeParcel = {
    bootstrap: [cssLc.bootstrap, lc.bootstrap],
    mount: [cssLc.mount, lc.mount],
    unmount: [cssLc.unmount, lc.unmount],
    update: lc.update
};