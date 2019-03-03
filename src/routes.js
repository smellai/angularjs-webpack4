/** @ngInject */
function routesConfig($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/hello');
}

export default routesConfig;
