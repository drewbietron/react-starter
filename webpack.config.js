const webpack = require('webpack');
const path = require('path');

const HOST = 'lp.player';
const PORT = '7337';

const webpackDevConfig = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve('./src'), 'node_modules'],
  },
  entry: {
    vendor: [
      'axios',
      'core-js',
      'react',
      'react-click-outside',
      'react-dom',
      'react-ga',
      'react-helmet',
      'react-redux',
      'react-router',
      'react-transition-group',
      'redux',
      'redux-thunk',
      'reselect',
    ],
    styles: [
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/only-dev-server',
      './app/stylesheets/main.scss',
    ],
    main: [
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/only-dev-server',
      './app/index.tsx',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./build'),
    publicPath: '/assets/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        DEV_ENV: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    host: HOST,
    hot: true,
    port: PORT,
    historyApiFallback: true,
    stats: {
      chunks: false,
      hash: false,
      version: false,
      timings: false,
    },
  },
  module: {
    rules: [
      {
        test: /(\.png$|\.jpg$|\.jpeg$|\.gif$|\.svg$)/,
        loader: 'file-loader',
        query: {
          name: 'assets/images/[path][name]-[hash].[ext]',
        },
      },
      {
        test: /(\.scss$|\.css$)/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader', 'import-glob-loader'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
    ],
  },
};

module.exports = webpackDevConfig;
