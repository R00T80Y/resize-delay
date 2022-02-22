/* eslint-disable import/no-extraneous-dependencies */
/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @since 10.02.2022
 * @modify 14-02-2022
 * @version 0.1.0
 */

const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin')
const paths = require('./paths');

module.exports = {
  mode: 'production',
  devtool: false,

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  // Папка с исходниками проекта
  context: paths.source,

  entry: {
    // Исходник библиотеки
    'ResizeDelay.polyfills': {
      import: './ResizeDelay.js',
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
    // При сборке выводит прогресс бар сборки проекта
    new webpack.ProgressPlugin(),

    // Копирует все из папки public в папку проекта
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
        // пропустить библиотеки из node_modules
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            exclude: [
              // \\ for Windows, \/ for Mac OS and Linux
              /node_modules[\\\/]core-js/,
              /node_modules[\\\/]webpack[\\\/]buildin/
            ],
            presets: [
              [
                '@babel/preset-env',
                {
                  debug: true,
                  useBuiltIns: 'usage',
                  corejs: 3,
                  modules: false,
                  loose: true
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
