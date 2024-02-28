import './App.scss';
import App from './App.svelte'

const targetElement = document.getElementById('app');
let app = null;

if (targetElement) {
  app = new App({
    target: targetElement,
  });
} else {
  console.error("Element s id 'app' nebol nájdený");
}

export default app