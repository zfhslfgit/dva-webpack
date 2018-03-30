import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const external = Object.keys(pkg.dependencies);
// rollup.config.js
export default {
  entry: 'src/index.js',
  moduleName: 'webpackDndc',
  external,
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    commonjs({
      exclude: ['src/**'],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  targets: [
    { dest: 'dest/index.js', format: 'cjs' },
  ],
};
