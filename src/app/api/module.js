import Tools from './tools.service';
import News from './news.service';

const ApiModule = 'app.api';

export default ApiModule;

angular
  .module(ApiModule, [])
  .service('Tools', Tools)
  .service('News', News);
