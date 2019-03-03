import {APP_NAME} from 'Constants';

class JsImagesComponent {
  /** @ngInject */
  constructor($scope, $log) {
    $log.info(`See how to use the "Constants" alias, defined in webpack config: ${APP_NAME}`);

    this.images = [];
    for (let i = 1; i < 5; i++) {
      this.images.push(
        // Using "Images" alias, defined in webpack config
        require(`Images/pupah_${i}.png`)
      );
    }

    this.currentEnv = process.env.NODE_ENV;
  }
}

export default {
  template: require('./js-images.html'),
  controller: JsImagesComponent
};
