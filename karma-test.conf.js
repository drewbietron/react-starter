const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    reporters: ['mocha'],
    client: {
      mocha: {
        ui: 'bdd-lazy-var/global',
        require: [require.resolve('bdd-lazy-var/bdd_lazy_var_global')],
      },
    },
    files: [
      'test/**/*-test.js',
    ],
    exclude: [
      'node_modules/',
    ],
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
    mochaReporter: {
      showDiff: true,
    },
    preprocessors: {
      'test/*-test.js': ['webpack'],
      'test/**/*-test.js': ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    port: 7357,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    autoWatchBatchDelay: 500,
    singleRun: false,
    concurrency: Infinity,
    reportSlowerThan: 250,
  });
};
