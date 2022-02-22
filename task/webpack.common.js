/* eslint-disable import/no-extraneous-dependencies */
/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @since 10.02.2022
 * @modify 14-02-2022
 * @version 0.1.0
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  // Папка с исходниками проекта
  context: paths.source,

  entry: {
    // Исходник библиотеки
    ResizeDelay: {
      import: './ResizeDelay.js',
      library: {
        name: 'ResizeDelay',
        type: 'umd',
        export: 'default',
        umdNamedDefine: true
      }
    },

    index: {
      import: './index.js',
      dependOn: ['ResizeDelay']
    }
  },

  output: {
    path: paths.build,
    filename: '[name].js',
    publicPath: '/',
    // Чистить папку проекта output.path?
    clean: true
  },

  plugins: [
    // При сборке выводит прогресс бар сборки проекта
    new webpack.ProgressPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      favicon: 'favicon.ico',
      inject: 'body',
      minify: false
    })
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        // пропустить библиотеки из node_modules
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
