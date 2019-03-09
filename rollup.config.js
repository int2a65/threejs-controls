import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

// building more than one bundle
export default [{
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'threejsControls',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    resolve({
      browser: true
    })
  ]
}, {
  input: 'index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    resolve({
      browser: true
    })
  ]
}];
// module.exports = {
//   input: 'src/index.js',
//   output: {
//     file: 'dist/bundle.js',
//     format: 'iife',
//     name: 'threejsPostProcessing',
//   },
//   plugins: [
//     babel({
//       exclude: 'node_modules/**',
//     }),
//     commonjs(),
//     resolve({
//       browser: true
//     }),
//     string({
// 			include: ["**/*.frag", "**/*.vert"]
// 		})
//   ]
// };