var path = require('path');

var ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader']},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.(css|html)$/, loader: 'raw-loader'}
        ]
    },
    plugins: [
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        )
    ]
};
