import FooterComponent from './footer.component';

const CommonModule = 'app.common';

export default CommonModule;

angular
  .module(CommonModule, [])
  .component('footer', FooterComponent);
