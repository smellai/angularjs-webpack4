# angularjs-webpack4
AngularJS+webpack 4 example project

An [AngularJS](https://angularjs.org/) + [webpack](https://webpack.github.io/) seed project, supporting [ES2015+](https://devhints.io/es6) syntax through
[Babel](https://babeljs.io/) compiler; [ESLint](https://eslint.org/) and [stylelint](https://stylelint.io/) will assist you writing beautiful code.

Updated version inspired by [top-solution/angularjs-webpack-seed](https://github.com/top-solution/angularjs-webpack-seed)

It comes with preconfigured
- [UI Router](https://ui-router.github.io/ng1/) 1.0.x
- Sass 3 (using [SCSS syntax](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html))
- [Nicolas Gallagher's Normalize.css](http://nicolasgallagher.com/about-normalize-css/)
- `box-sizing: border-box` [as recommended by Paul Irish](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)

Supported browsers (in [browserlist](https://github.com/ai/browserslist) format) are:

```
last 2 versions
ie >= 10
```

## Pre-requisites

Required:
- [Node.js](https://nodejs.org/) with `npm`,
  the current LTS version is an ideal starting point

## Usage

Fork or download the project then install dependencies

```shell
$ npm install
```

### Development

```shell
$ npm run dev
```

The project will be available at http://localhost:8000/.

### Building

```shell
$ npm run build
```

### Environment variables
If you need to inject different environment variables, for example to use a different API url in a certain environment, just add them to the proper env file (for example if 'NODE_ENV=dev' the env file is `env/dev.sh`).

Through every file inside src the placeholders will be replaced with actual values during the build.

For example if you add `APP_NAME=Angularjs seed` to the `env/dev.sh` every instance of `%APP_NAME%` will be replaced with `Angularjs seed`

Note that for every change in the env files you'll have to restart the webpack server if it's running.

## Known issues

- Internet Explorer 10 is not supported in development mode

## Versioning

- Use [npm version](https://docs.npmjs.com/cli/version)

