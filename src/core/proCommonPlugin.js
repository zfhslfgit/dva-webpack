import webpack from 'webpack';

/**
 * 生产公共插件(生产切换生产环境、减少大小、js&css混淆压缩)
 *
 * @since 0.0.1
 * @category core
 * @method proCommonPlugin
 * @return {array} 插件
 * @example
 *
 * import { proCommonPlugin } from '@dndc/webpack-dndc'
 *
 * proCommonPlugin()
 *
 */

function proCommonPlugin() {
  return [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // 通过模块调用次数给模块分配ids，常用的ids就会分配更短的id，使ids可预测，减小文件大小
    new webpack.optimize.OccurrenceOrderPlugin(),
    // JS与CSS的压缩混淆
    new webpack.optimize.UglifyJsPlugin(),
  ];
}

export default proCommonPlugin;
