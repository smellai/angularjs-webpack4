import JsImagesComponent from './js-images.component';
import routesConfig from './routes';

const JsImagesModule = 'app.js-modules';

export default JsImagesModule;

angular
  .module(JsImagesModule, [])
  .config(routesConfig)
  .component('images', JsImagesComponent);
