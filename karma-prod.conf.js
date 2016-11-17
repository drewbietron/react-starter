const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
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
    preprocessors: {
      'test/*-test.js': ['webpack'],
      'test/**/*-test.js': ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    reporters: ['junit', 'dots'],
    mochaReporter: {
      showDiff: true,
    },
    // Config for Circle CI Junit test output
    // See circle.yml for the definition of $MOCHA_FILE
    junitReporter: {
      outputFile: process.env.MOCHA_FILE,
    },
    port: 7357,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    browsers: ['Chrome'],
    concurrency: Infinity,
  });
};
