import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babelrc from 'babelrc-rollup'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'

export default {
  input: 'src/index.js',

  output: {
    name: 'carddeck',
    file: 'dist/carddeck.js',
    format: 'umd',
    sourcemap: true
  },

  plugins: [
    resolve(), // so Rollup can find `ms`
    commonjs(), // so Rollup can convert `ms` to an ES module
    babel(babelrc()),
    uglify(),
    filesize()
  ]
}
