const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['vue-style-loader', 'css-loader','postcss-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
