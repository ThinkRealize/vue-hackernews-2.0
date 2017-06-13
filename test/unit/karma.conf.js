// Karma configuration
// Generated on Mon Jun 12 2017 21:45:48 GMT+0800 (CST)
const webpackConfig = require('../../build/webpack.test.config')

module.exports = function(config) {
  config.set({


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome', 'PhantomJS'],
    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: ['./file.js'],


    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-chai',
      'karma-sinon-chai',
      // 'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-coverage'
    ],


    // list of files to exclude
    exclude: [
    ],


    reporters: ['spec', 'coverage', 'progress'],


    webpack: webpackConfig,


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
     './file.js': ['webpack', 'sourcemap', 'coverage'] 
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage', 'progress'],


    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
