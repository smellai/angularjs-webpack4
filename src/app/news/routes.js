/** @ngInject */
function routesConfig($stateProvider) {
  $stateProvider
    .state('news', {
      url: '/news',
      component: 'news'
    });
}

export default routesConfig;
