const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = require(path.join(__dirname, 'webpack.conf'));

const dirDist = path.join(__dirname, '../dist');

module.exports = Object.assign(webpackConfig, {

  output: {
    path: path.join(dirDist),
    filename: '[name].[chunkhash].js',
    publicPath: ''
  },

  plugins: webpackConfig.plugins.concat([
    new CleanWebpackPlugin(['dist'], {root: path.join(__dirname, '..')})
  ]),
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    },
    runtimeChunk: {
      name: 'manifest'
    }
  }
});
