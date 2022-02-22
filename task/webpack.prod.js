/* eslint-disable import/no-extraneous-dependencies */
/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @since 10.02.2022
 * @modify 13-02-2022
 * @version 0.1.0
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});
