var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app',

    devtool: 'source-map',

    output: {
        path: __dirname ,
        filename: 'Map.js'
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader:"style-loader", use: "css-loader!sass-loader"})
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: [ 'es2015' ] }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};