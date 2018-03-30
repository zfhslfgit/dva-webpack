import firstRules from './core/firstRules';
import getPaths from './core/getPaths';
import CSSRules from './core/CSSRules';
import commonPlugin from './core/commonPlugin';
import proCommonPlugin from './core/proCommonPlugin';

const webpackDndc = {
  firstRules,
  getPaths,
  CSSRules,
  commonPlugin,
  proCommonPlugin,
};
export default webpackDndc;


/**
 * @module webpackDndc
 */

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

/**
 * css模块规则（暂时针对dva）
 *
 * @since 0.0.1
 * @category core
 * @method commonPlugin
 * @param {object} [options={ paths: { appSrc:''src/index.ejs' }}]
 * appSrc：'源文件路径'
 * @return {object} css规则
 * @example
 *
 * import { CSSRules, getPaths } from '@dndc/webpack-dndc'
 *
 * const paths = getPaths(process.cwd());
 * const resultCSS = CSSRules({ paths });
 *
 * //resultCSS.rules css规则
 * //resultCSS.CSSPlugin css插件
 *
 */

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

/**
 * 获取路径
 *
 * @since 0.0.1
 * @category core
 * @method getPaths
 * @param {object} [options={ cwd:process.cwd() }]
 * appNodeModules：'node模块'，babelOptions：babel配置
 * @return {object} 路径
 * @example
 *
 * import { getPaths } from '@dndc/webpack-dndc'
 *
 * const paths = getPaths(process.cwd());
 *
 */

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

