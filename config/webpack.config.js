/**
 * Created by thinhtran on 1/31/17.
 */

const helpers = require('./helpers');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const METADATA = {
    title: 'Angular2 Webpack Starter by @gdi2290 from @AngularClass',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer()
};

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: "./dist",
        filename: "editor.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.ts?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency',
            metadata: METADATA,
            inject: 'head'
        })
    ]
};