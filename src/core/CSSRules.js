import pxtorem from '@dndc/dealer-admin-pxtorem';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import rucksack from 'rucksack-css';

/**
 * css模块规则（暂时针对dva）
 *
 * @since 0.0.1
 * @category core
 * @method commonPlugin
 * @param {object} [options={ paths: { appSrc:'src/index.ejs' }}]
 * appSrc：'源文件路径'
 * @return {object} css对象
 * @example
 *
 * import { CSSRules, getPaths } from '@dndc/webpack-dndc'
 *
 * const paths = getPaths(process.cwd());
 * const resultCSS = CSSRules({ paths });
 *
 * //resultCSS.rules css模块规则
 * //resultCSS.CSSPlugin css插件
 *
 */

function CSSRules({ paths }) {
  const getModifyVars = {
    '@text-color': '#000',
    '@primary-color': '#c90028',
    '@brand-primary': '#c90028',
  };

  const rules = [
    {
      test: /\.css$/,
      include: paths.appSrc,
      use: [
        'style',
        {
          loader: 'css',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[local]___[hash:base64:5]',
          },
        },
        {
          loader: 'postcss',
          options: {
            sourceMap: true,
            ident: 'postcss',
            plugins: () => [
              rucksack(),
              autoprefixer({
                browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
              }),
              pxtorem({
                rootValue: 100,
                propWhiteList: [],
              }),
            ],
          },
        },
      ],

    },
    {
      test: /\.less$/,
      include: paths.appSrc,
      use: [
        'style',
        {
          loader: 'css',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[local]___[hash:base64:5]',
          },
        },
        {
          loader: 'postcss',
          options: {
            sourceMap: true,
            ident: 'postcss',
            plugins: () => [
              rucksack(),
              autoprefixer({
                browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
              }),
              pxtorem({
                rootValue: 100,
                propWhiteList: [],
              }),
            ],
          },
        },
        {
          loader: 'less',
          options: {
            sourceMap: true,
            modifyVars: getModifyVars,
          },
        },
      ],
    },
  ];
  rules.forEach((rule) => {
    rule.use = ExtractTextPlugin.extract({
      fallback: 'style',
      use: rule.use.slice(1),
    });
  });

  // 样式抽取
  const CSSPlugin = new ExtractTextPlugin({
    filename: '[name].[contenthash:8].css',
    disable: false,
    allChunks: true,
  });

  return {
    rules,
    CSSPlugin,
  };
}


export default CSSRules;
