/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @since 10.02.2022
 * @modify 13-02-2022
 * @version 0.1.0
 */

const paths = require('./paths');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    static: paths.build,
    historyApiFallback: true,
    compress: false,
    hot: false,
    liveReload: true,
    port: 9000,
  },
});
