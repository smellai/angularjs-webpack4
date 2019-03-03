/** @ngInject */
function routesConfig($stateProvider) {
  $stateProvider
    .state('hello', {
      url: '/hello',
      component: 'hello',
      resolve: {
        tools: getTools
      }
    });
}

/** @ngInject */
function getTools(Tools) {
  return Tools.get();
}

export default routesConfig;
