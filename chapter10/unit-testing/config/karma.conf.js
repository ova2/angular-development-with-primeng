let grep = require('karma-webpack-grep');
let webpackConfig = require('./webpack.test.js');

module.exports = config => {
    webpackConfig.plugins = (webpackConfig.plugins || []).concat(grep({
        grep: config.grep,
        basePath: '.',
        testContext: '../src/'
    }));
    
    config.set({
        autoWatch: false,
        singleRun: true,
        browsers: ['Chrome', 'PhantomJS'],
        basePath: '.',
        /*
         * list of files to load in the browser is built via spec-bundle.js
         */
        files: [
            'spec-bundle.js'
        ],
        exclude: [],
        frameworks: [
            'jasmine',
            'jasmine-matchers'
        ],
        logLevel: config.LOG_INFO,
        phantomJsLauncher: {
            exitOnResourceError: true
        },
        port: 9876,
        colors: true,
        preprocessors: {
            'spec-bundle.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};