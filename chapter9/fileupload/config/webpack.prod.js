const path = require('path');

// used to merge webpack configs
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const AotPlugin = require('@ngtools/webpack').AotPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

module.exports = webpackMerge(commonConfig, {
    entry: {
        'main': './main.aot.ts',
        'polyfill': './polyfill.ts'
    },
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    emitErrors: true,
                    failOnHint: true    
                }
            },
            {test: /\.ts$/, loader: '@ngtools/webpack'}
        ]
    },
    bail: true,
    plugins: [
        new AotPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: path.resolve(__dirname, '..') + '/src/app/app.module#AppModule'
        }),
        new NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: "[name].[contenthash].css"
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessor: cssnano,
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                },
                safe: true
            }
        }),
        new ClosureCompilerPlugin({
            compiler: {
                language_in: 'ECMASCRIPT6',
                language_out: 'ECMASCRIPT5',
                compilation_level: 'SIMPLE'
            },
            concurrency: 3,
        })
    ]
});