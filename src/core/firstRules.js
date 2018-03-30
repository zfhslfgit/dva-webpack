/**
 * 模块规则（js、html、esj、图片规则）
 *
 * @since 0.0.1
 * @category core
 * @method firstRules
 * @param {object} [options={ paths: { appNodeModules:'node_modules' },babelOptions: { presets:['env','react','stage-0'],plugins:['transform-runtime'] }}]
 * appNodeModules：'node模块'，babelOptions：babel配置
 * @return {object} 公共模块匹配规则
 * @example
 *
 * import { firstRules } from '@dndc/webpack-dndc'
 *
 * const paths = getPaths(process.cwd());
 * const babelOptions = {
 *   presets: [
 *    "env",
 *    "react",
 *    "stage-0",
 *   ]
 *   plugins:[
 *     "transform-runtime"
 *   ]
 * }
 * firstRules({ paths, babelOptions })
 *
 */

function firstRules({ paths, babelOptions }) {
  return [
    {
      test: /\.(js|jsx)$/,
      exclude: paths.appNodeModules,
      use: [
        {
          loader: 'babel',
          options: babelOptions,
        },
      ],
    },
    {
      test: /\.html?$/,
      use: {
        loader: 'html',
      },
    },
    {
      test: /\.ejs?$/,
      use: {
        loader: 'ejs',
      },
    },
    {
      test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
      use: [
        {
          loader: 'file',
          options: {
            context: 'src',
            name: '[path][name].[ext]',
          },
        },
      ],
    },
  ];
}

export default firstRules;
