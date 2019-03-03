import HelloComponent from './hello.component';
import routesConfig from './routes';

const HelloModule = 'app.hello';

export default HelloModule;

angular
  .module(HelloModule, [])
  .config(routesConfig)
  .component('hello', HelloComponent);
