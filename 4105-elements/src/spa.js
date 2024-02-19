import singleSpaHtml from 'single-spa-html';
import './app.js';

const htmlLifecycles = singleSpaHtml({
    template: '<wja-elements></wja-elements>',
})

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;
