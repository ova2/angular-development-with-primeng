// used to merge webpack configs
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

var SourceMapDevToolPlugin = require('webpack/lib/SourceMapDevToolPlugin');

module.exports = webpackMerge(commonConfig, {
    entry: {
        'main': './main.jit.ts',
        'polyfill': './polyfill.ts'
    },
    output:
    {
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader']}
        ]
    },
    plugins: [
        new SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: ['main.css', 'manifest.js', 'polyfill.js']
        })
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        contentBase: 'dist/',
        watchOptions: {
            aggregateTimeout: 100,
            poll: 300
        },
        stats: {
            colors: true
        }
    }
});