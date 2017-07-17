// used to merge webpack configs
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SourceMapDevToolPlugin = require('webpack/lib/SourceMapDevToolPlugin');

module.exports = webpackMerge(commonConfig, {
    entry: {
        'main': './main.jit.ts',
        'polyfill': './polyfill.ts'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader']}
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].css"
        }),
        new SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: ['main.css', 'manifest.js', 'polyfill.js']
        })
    ]
});