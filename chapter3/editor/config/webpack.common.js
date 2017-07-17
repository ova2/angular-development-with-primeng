const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const HashedModuleIdsPlugin = require('webpack/lib/HashedModuleIdsPlugin');
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
//const CopyWebpackPlugin = require('copy-webpack-plugin');

const ROOT = path.resolve(__dirname, '..');
const CHUNKS_SORT_ORDER = ['manifest', 'polyfill', 'main'];

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
                    use: "css-loader"
                })
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /^\_.*\.scss/
            }
        ]
    },
    plugins: [
        new ModuleConcatenationPlugin(),
        /*new CopyWebpackPlugin([
            {from: 'assets/data', to: 'assets/data'}
        ]),*/
        // move webpack runtime code to a separate manifest file in order to support long-term caching.
        // this will avoid hash recreation for vendor files when only application files are changed.
        new CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new HashedModuleIdsPlugin(),
        new OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                removeComments: true
            },
            chunksSortMode: function (a, b) {
                const idxA = CHUNKS_SORT_ORDER.indexOf(a.names[0]);
                const idxB = CHUNKS_SORT_ORDER.indexOf(b.names[0]);
                return idxA - idxB;
            }
        }),
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        )
    ],
    devServer: {
        host: 'localhost',
        compress: true,
        port: 3000,
        overlay: true,
        historyApiFallback: true,
        contentBase: 'dist/',
        stats: {
            modules: false,
            colors: true
        }
    }
};
