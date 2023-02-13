import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import swRegister from './utils/sw-register';

import './views/components';
import App from './views/app';

const app = new App({
  button: document.querySelector('#togglerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
