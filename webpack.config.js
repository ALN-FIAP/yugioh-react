'use strict';
const { strict } = require('assert');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.[s]?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {directory : path.join(__dirname, 'public')},
        port:8080
    }
};