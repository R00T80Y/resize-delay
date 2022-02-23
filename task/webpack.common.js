/* eslint-disable import/no-extraneous-dependencies */
/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @since 10.02.2022
 * @modify 14-02-2022
 * @version 0.1.0
 */

const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const paths = require('./paths');

const PRODUCTION_MODE = process.env.NODE_ENV === 'production';

module.exports = {
  context: paths.source,

  entry: {
    ResizeDelay: {
      // import: './../dist/esm/index.js',
      import: './ResizeDelay.js',
      filename: '[name].lib.js',
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
    publicPath: '/'
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: '../public/',
          to: ''
        }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
