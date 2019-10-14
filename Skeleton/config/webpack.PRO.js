const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.BASE.js');

const webpack = require('webpack');

module.exports = merge(baseConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify("production"),
                'HMR': false
            }
        })
    ]
})