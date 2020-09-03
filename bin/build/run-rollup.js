const rollup = require('rollup');

const { nodeResolve } = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');

const rollupPostcss = require('rollup-plugin-postcss');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const postcssVariables = require('postcss-css-variables');
const clean = require('postcss-clean');

const copy = require('rollup-plugin-copy');

const htmlContentTransform = require('./html-content-transform');
const { developmentMode, outputFileName } = require('./_utils');

const inputOptions = {
  input: './src/main.ts',
  plugins: [
    nodeResolve(),
    typescript(),
    rollupPostcss({
      extract: true,
      plugins: [
        atImport(),
        autoprefixer(),
        !developmentMode && postcssVariables(),
        !developmentMode && clean(),
      ],
    }),
    !developmentMode &&
    terser({
      compress: {
        module: true,
      },
      mangle: {
        properties: {
          keep_quoted: true,
        },
      },
    }),
    copy({
      targets: [
        {
          src: 'src/content/**/*',
          dest: 'public/content',
          transform: htmlContentTransform,
        },
        {
          src: 'src/index.html',
          dest: 'public',
          transform: htmlContentTransform,
        },
        {
          src: 'src/images/**/*',
          dest: 'public/images',
        },
      ],
    }),
  ]
};

const outputOptions = {
  file: `./public/${outputFileName}.js`,
  format: 'iife',
  sourcemap: true,
};

async function build() {
  const bundle = await rollup.rollup(inputOptions);
  await bundle.write(outputOptions);
}

module.exports = build;