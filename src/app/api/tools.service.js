const tools = [{
  name: 'AngularJS',
  href: 'https://angularjs.org',
  image: 'https://raw.githubusercontent.com/angular/angular.js/master/images/logo/AngularJS.exports/AngularJS-medium.png'
}, {
  name: 'webpack',
  href: 'https://webpack.js.org/',
  image: 'https://raw.githubusercontent.com/webpack/media/master/logo/icon.png'
}, {
  name: 'ES2015+',
  href: 'https://devhints.io/es6',
  image: 'https://cdn-images-1.medium.com/max/785/1*j8TtXep5psnKxDEQeffPfg.png'
}, {
  name: 'Babel',
  href: 'https://babeljs.io/',
  image: 'https://raw.githubusercontent.com/babel/logo/master/babel.png'
}, {
  name: 'ESLint',
  href: 'https://eslint.org/',
  image: 'https://eslint.org/img/logo.svg'
}, {
  name: 'Angular UI Router',
  href: 'https://ui-router.github.io/',
  image: 'https://ui-router.github.io/images/logos/ui-router.svg'
}, {
  name: 'Sass',
  href: 'http://sass-lang.com/',
  image: 'http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg'
}];

class ToolsService {
  get() {
    return Promise.resolve(tools);
  }
}

export default ToolsService;
