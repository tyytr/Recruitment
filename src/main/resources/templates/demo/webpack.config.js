const path = require('path');
module.exports = {
    entry: './public/main.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'},
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader',
            }
        ]
    },
    devServer: {
        contentBase: "./",
        historyApiFallback: true,
    },
    resolve: {
        extensions: [ ' ','.js', '.json', '.scss', '.ts']
    }
};