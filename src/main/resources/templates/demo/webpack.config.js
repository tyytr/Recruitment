const path = require('path');
module.exports = {
    entry: './public/main.js',
    output: {
        path:  '/',
        filename: 'bundle.js'  //输出文件
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                //转换es6 -> 低版本  用于识别
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
        extensions: [ ' ','.js', '.json', '.css', '.ts']
    }
};