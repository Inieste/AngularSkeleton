const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './AngularApp/src/polyfills.ts',
        login: './AngularApp/src/app/login/login.main.ts',
        routes: './AngularApp/src/app/routes/routes.main.ts'
    },
    output: {
        path: path.resolve(__dirname, "../wwwroot/dist"),
        filename: "[name].js",
        chunkFilename: "chunk/[id].[chunkhash].js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.ts', '.js', '".html']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular-router-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    test: /node_modules/,
                    priority: 20
                },
                commons: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'async',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        },
    },
    plugins: [
        new CleanWebpackPlugin(
            ['wwwroot/dist'],
            {
                root: path.resolve(__dirname, ".."),
                verbose: true
            }
        ),
        new HtmlWebpackPlugin({
            filename: "../../Views/Shared/_Layout.cshtml",
            template: "Views/Shared/_LayoutTemplate.cshtml",
            chunks: ['polyfills', 'vendor'],
            inject: 'head'
        })
    ]
}