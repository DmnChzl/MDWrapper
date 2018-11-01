'use strict';

const path = require('path');

// Plugins
const { DefinePlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const resolvePath = pathName => path.resolve(__dirname, pathName);

// Paths
const buildPath = resolvePath('dist');
const entryPath = resolvePath('src/index.js');
const htmlPath = resolvePath('public/index.html');
const publicPath = resolvePath('public');
const srcPath = resolvePath('src');

// Regex
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const htmlRegex = /\.html$/;
const jsRegex = /\.js$/;
const jsonRegex = /\.json$/;
const jsxRegex = /\.(js|jsx)$/;
const nodeModuleRegex = /node_modules/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// WebPack Config
module.exports = (env, options) => ({
  entry: [
    require.resolve('@babel/polyfill'),
    entryPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    chunkFilename: 'bundle.chunk.js'
  },
  optimization: {
    nodeEnv: options.mode,
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  performance: {
    hints: false
  },
  devServer: {
    contentBase: publicPath,
    compress: true,
    historyApiFallback: true,
    port: 3140
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      '@': srcPath
    }
  },
  module: {
    rules: [
      {
        test: jsRegex,
        enforce: 'pre',
        use: [
          require.resolve('eslint-loader')
        ],
        include: srcPath
      },
      {
        oneOf: [
          {
            test: jsxRegex,
            exclude: nodeModuleRegex,
            use: [
              require.resolve('babel-loader')
            ]
          },
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            use: [
              require.resolve('style-loader'),
              require.resolve('css-loader')
            ]
          },
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              require.resolve('style-loader'),
              require.resolve('css-loader'),
              require.resolve('sass-loader')
            ]
          },
          {
            exclude: [jsRegex, htmlRegex, jsonRegex],
            loader: require.resolve('file-loader')
          }
        ]
      }
    ]
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new HtmlPlugin({
      inject: true,
      template: htmlPath
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(options.mode)
    })
  ]
});
