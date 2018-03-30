import { resolve } from 'path';
import { realpathSync } from 'fs';

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

function getPaths(cwd = process.cwd()) {
  const appDirectory = realpathSync(cwd);

  function resolveApp(relativePath) {
    return resolve(appDirectory, relativePath);
  }

  return {
    appBuild: resolveApp('dest'),
    appBuildDist: resolveApp('dist'),
    appSrc: resolveApp('src'),
    appNodeModules: resolveApp('node_modules'),
    resolveApp,
    appDirectory,
  };
}

export default getPaths;
