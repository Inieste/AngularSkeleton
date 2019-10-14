const merge = require('webpack-merge');
const baseConfig = require('./webpack.BASE.js');

const webpack = require('webpack');

module.exports = merge(baseConfig, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify("development"),
                'HMR': true
            }
        })
    ],
    devtool: "inline-source-map"
})