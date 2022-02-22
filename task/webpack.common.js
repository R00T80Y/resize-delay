/* eslint-disable import/no-extraneous-dependencies */
/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @since 10.02.2022
 * @modify 14-02-2022
 * @version 0.1.0
 */

const webpack = require('webpack');
const paths = require('./paths');

module.exports = {
  context: paths.source,

  entry: {
    ResizeDelay: {
      import: './ResizeDelay.js',
      filename: 'lib/[name].js',
      library: {
        name: 'ResizeDelay',
        type: 'umd',
        export: 'default',
        umdNamedDefine: true
      }
    }
  },

  output: {
    path: paths.build,
    filename: '[name].js',
    publicPath: '/',
    clean: true
  },

  plugins: [
    new webpack.ProgressPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
