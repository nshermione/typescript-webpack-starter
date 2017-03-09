/**
 * Created by thinhtran on 1/31/17.
 */

const path = require("path");
const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const commonConfig = require("./webpack.config");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    devServer: {
        host: "localhost",
        port: 9000,
        historyApiFallback: true,
        stats: 'minimal',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
});