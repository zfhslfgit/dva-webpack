import spanner from '@dndc/project-spanner';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import chalk from 'chalk';

const defaults = {
  htmlWebpackPluginOps: {
    template: 'src/index.ejs',
    favicon: './favicon.ico',
  },
};

/**
 * 公用插件(公共代码提取、进度条、生成HTML)
 *
 * @since 0.0.1
 * @category core
 * @method commonPlugin
 * @param {object} [options={ htmlWebpackPluginOps: { template:''src/index.ejs', favicon:'./favicon.ico' }}]
 * template：'模板'，favicon：图标
 * @return {array} 公用插件
 * @example
 *
 * import { commonPlugin } from '@dndc/webpack-dndc'
 *
 * const htmlWebpackPluginOps = {
 *   "template": "src/index.ejs",
 *   "favicon": "./favicon.ico"
 * }
 * commonPlugin({ htmlWebpackPluginOps })
 *
 */


function commonPlugin({
  htmlWebpackPluginOps = defaults.htmlWebpackPluginOps,
} = defaults) {
  return [
    // 公共代码提取
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.[hash].js',
    }),
    // 进度条
    new ProgressBarPlugin({
      format: `🏃 :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      clear: false,
    }),
    new HtmlWebpackPlugin({
      template: htmlWebpackPluginOps.template,
      cdn: spanner.getCdnHost(),
      favicon: htmlWebpackPluginOps.favicon,
      hash: true,
      env: spanner.isProduction() ? 'production' : 'development',
    }),
  ];
}

export default commonPlugin;
