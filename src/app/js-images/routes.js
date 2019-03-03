/** @ngInject */
function routesConfig($stateProvider) {
  $stateProvider
    .state('images', {
      url: '/images',
      component: 'images'
    });
}

export default routesConfig;
