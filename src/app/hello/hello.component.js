class HelloController {
  /** @ngInject */
  constructor($window, $log) {
    this.window = $window;
    this.log = $log;
  }

  $onInit() {
    this.log.info('Available tools:', this.tools);
  }

  open(tool) {
    this.window.open(tool.href, '_blank');
  }
}

export default {
  bindings: {
    tools: '<'
  },
  template: require('./hello.html'),
  controller: HelloController
};
