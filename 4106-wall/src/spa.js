import singleSpaHtml from 'single-spa-html';
import './wall/wall.js';

const htmlLifecycles = singleSpaHtml({
    template: '<wja-wall></wja-wall>',
})

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;
