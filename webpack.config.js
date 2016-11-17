'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const glob = require('glob');

module.exports = {
  devtool: 'inline-eval-cheap-source-map',
  entry: {
    vendor: [
      'react',
      'react-dom',
    ],
    styles: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app/stylesheets/main.scss',
    ],
    main: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app/index.js',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/assets/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  devServer: {
    host: 'localhost',
    hot: true,
    port: 3000,
    historyApiFallback: true,
    stats: {
      chunks: false,
      hash: false,
      version: false,
      timings: false,
    },
  },
  postcss: [
    autoprefixer({
      browsers: ['> 1%', 'last 2 versions'],
    }),
  ],
  module: {
    loaders: [
      {
        test: /(\.png$|\.jpg$|\.jpeg$|\.gif$|\.svg$)/,
        loader: 'file-loader',
        query: {
          name: 'assets/images/[path][name]-[hash].[ext]',
        },
      },
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /\/node_modules\//,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
        },
      },
      {
        test: /(\.scss$|\.css$)/,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass',
          'import-glob',
        ],
      },
    ],
  },
};
