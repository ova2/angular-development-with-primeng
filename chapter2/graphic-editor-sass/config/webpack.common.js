var path = require('path');
var autoprefixer = require('autoprefixer');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
var HashedModuleIdsPlugin = require('webpack/lib/HashedModuleIdsPlugin');
var ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
var LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");

var ROOT = path.resolve(__dirname, '..');
var CHUNKS_SORT_ORDER = ['manifest', 'polyfill', 'main'];

// Common configuration for development and production
module.exports = {
    output: {
        path: path.join(ROOT, 'dist'),
        publicPath: '/'
    },
    context: path.join(ROOT, 'src'),
    // See https://medium.com/webpack/harnessing-the-power-of-webpack-2cd0e20ff1bf#.q9do1u54o
    recordsPath: path.join(ROOT, 'config', 'webpack-records.json'),
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {enforce: 'pre', test: /\.ts$/, loader: 'tslint-loader', exclude: /(node_modules)/},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot|ico)$/, loader: 'file-loader?name=assets/[name].[ext]'},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader', 'postcss-loader']
                }),
                exclude: /^\_.*\.scss/
            }
        ]
    },
    plugins: [
        new LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),    
        // move webpack runtime code to a separate manifest file in order to support long-term caching.
        // this will avoid hash recreation for vendor files when only application files are changed.
        new CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new HashedModuleIdsPlugin(),
        new WebpackMd5Hash(),
        new OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                removeComments: true
            },
            chunksSortMode: function (a, b) {
                var idxA = CHUNKS_SORT_ORDER.indexOf(a.names[0]);
                var idxB = CHUNKS_SORT_ORDER.indexOf(b.names[0]);
                return idxA - idxB;
            }
        }),
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        )
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
};
