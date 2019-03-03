import routesConfig from './routes';
import CommonModule from './app/common/module';
import ApiModule from './app/api/module';
import HelloModule from './app/hello/module';
import NewsModule from './app/news/module';
import JsImagesModule from './app/js-images/module';

import './index.scss';

export const AppModule = 'app';

angular
  .module(AppModule, [
    'ui.router',
    ApiModule,
    CommonModule,
    HelloModule,
    NewsModule,
    JsImagesModule
  ])
  .config(routesConfig);

