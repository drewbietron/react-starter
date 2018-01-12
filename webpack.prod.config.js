const webpack = require('webpack');
const config = require('./webpack.config');
const path = require('path');
const autoprefixer = require('autoprefixer');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackProdConfig = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve('./src'), 'node_modules'],
  },
  entry: {
    vendor: config.entry.vendor,
    styles: ['./app/stylesheets/main.scss'],
    main: ['./app/index.tsx'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]-[chunkhash].bundle.js',
    publicPath: process.env.ASSET_HOST,
  },
  module: {
    rules: [
      {
        test: /(\.png$|\.jpg$|\.jpeg$|\.gif$|\.svg$)/,
        loader: 'file-loader',
        query: {
          name: 'images/[path][name]-[hash].[ext]',
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            'postcss-loader',
            'sass-loader',
            'import-glob-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        DEV_ENV: false,
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.svg$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new HtmlWebpackPlugin({
      template: './app/layouts/index.ejs',
      chunks: ['main', 'vendor', 'styles'],
    }),
    new CopyWebpackPlugin([
      { from: 'images', to: 'images' },
      { from: 'fonts', to: 'fonts' },
      { from: 'robots.txt' },
    ]),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
    new ExtractTextPlugin('stylesheets/[name]-[chunkhash].css'),
  ],
};

module.exports = webpackProdConfig;
