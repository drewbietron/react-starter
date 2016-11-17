const webpack = require('webpack');
const config = require('./webpack.config');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackProdConfig = {
  entry: {
    vendor: [
      'classnames',
      'isomorphic-fetch',
      'qs',
      'react',
      'react-addons-css-transition-group',
      'react-dom',
      'react-helmet',
      'react-redux',
      'react-router',
      'redux',
      'redux-thunk',
      'reselect',
    ],
    main: [
      './app/index.js',
    ],
  },
  module: {
    loaders: [
      {
        test: /(\.png$|\.jpg$|\.jpeg$|\.gif$|\.svg$)/,
        loader: 'file-loader',
        query: {
          name: 'images/[path][name]-[hash].[ext]',
        },
      },
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /\/node_modules\//,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  postcss: config.postcss,
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      filename: '[name]-[chunkhash].bundle.js',
      names: ['vendor'],
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.svg$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        DEV_ENV: false,
        NODE_ENV: JSON.stringify('production'),
        SELLER_SITE_CONFIG_API_HOST: JSON.stringify(process.env.SELLER_SITE_CONFIG_API_HOST),
      },
    }),
    new HtmlWebpackPlugin({
      template: './app/layouts/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
      chunks: ['main', 'vendor'],
    }),
    new CopyWebpackPlugin(
      [
        { from: 'images', to: 'images' },
        { from: 'robots.txt' },
      ]
    ),
  ],
};

module.exports = webpackProdConfig;
