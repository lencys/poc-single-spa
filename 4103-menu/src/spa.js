import "./app.js";
import singleSpaHtml from "single-spa-html";

const htmlLifecycles = singleSpaHtml({
  template: '<wja-menu></wja-menu>',
});

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;