import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import postcss from 'rollup-plugin-postcss'

// const isDEV = process.env.NODE_ENV !== 'production'

export default {
  input: './src/index.js',
  output: {
    format: 'es',
    name: 'SpriteVue',
    sourcemap: true,
    file: 'dist/sprite-vue.esm.js'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    commonjs(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    postcss({ inject: true }),
    buble({
      objectAssign: 'Object.assign'
    })
  ],
  external (id) {
    return /^lodash/.test(id) || ['vue-resize'].indexOf(id) > -1
  }
}
