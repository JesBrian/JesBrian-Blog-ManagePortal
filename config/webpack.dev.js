// webpack.dev.js

const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');

const webpackConfig = require('./webpack.config.js');

module.exports = WebpackMerge(webpackConfig, {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    port: 5354,
    hot: true,
    inline: true,
    contentBase: '../dist'
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ]
});
