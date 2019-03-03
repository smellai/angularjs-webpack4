const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');

const StyleLintPlugin = require('stylelint-webpack-plugin');

const dirSrc = path.join(__dirname, '../src');
const dirNodeModules = path.join(__dirname, '../node_modules');

const IS_DEV = (process.env.NODE_ENV === 'dev');
const getClientEnvironment = require('./env');

process.env.BASE_URL = '/';

const env = getClientEnvironment();

module.exports = {
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new StyleLintPlugin(),
    new WebappWebpackPlugin({
      logo: path.join(dirSrc, 'images/favicon.png'),
      favicons: {
        appName: 'AngularJS + webpack example app',
        developerURL: null, // Prevent retrieving from the nearest package.json
        background: '#fff',
        theme_color: '#dc143c', // eslint-disable-line camelcase
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: true,
          windows: true
        },
        inject: true
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(dirSrc, 'index.html'),
      minify: {
        removeAttributeQuotes: false
      }
    }),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }.
    new webpack.DefinePlugin(env.stringified)
  ],
  resolve: {
    alias: {
      Constants: path.resolve(dirSrc, 'constants.js'),
      Images: path.resolve(dirSrc, 'images')
    }
  },
  entry: {
    main: [
      'angular',
      '@uirouter/angularjs',
      '@babel/polyfill',
      path.join(dirSrc, 'index')
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'string-replace-loader',
        options: {
          multiple: env.replaceArray
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer],
              sourceMap: IS_DEV
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [dirNodeModules],
              sourceMap: IS_DEV
            }
          }
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'ng-annotate-loader',
            options: {
              ngAnnotate: 'ng-annotate-patched',
              es6: true,
              dynamicImport: true,
              explicitOnly: false
            }
          },
          'babel-loader'
        ]
      }, {
        test: /\.html$/,
        loaders: [
          'html-loader'
        ]
      }, {
        test: /\.(jpe*g|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'images/'
        }
      }
    ]
  }
};
