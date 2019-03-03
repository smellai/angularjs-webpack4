import NewsComponent from './news.component';
import routesConfig from './routes';

const NewsModule = 'app.news';

export default NewsModule;

angular
  .module(NewsModule, [])
  .config(routesConfig)
  .component('news', NewsComponent);
