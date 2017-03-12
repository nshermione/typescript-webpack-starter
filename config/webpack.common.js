/**
 * Created by thinhtran on 1/31/17.
 */

const helpers = require('./helpers');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const METADATA = {
    title: 'App',
    baseUrl: '/'
};

module.exports = {
    entry: {
        vendors: helpers.root("src/vendors.ts"),
        app: helpers.root("src/main.ts")
    },
    output: {
        path: helpers.root('dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".js"],
        alias: {
            'p2': helpers.root('node_modules/phaser/build/custom/p2'),
            'pixi': helpers.root('/node_modules/phaser/build/custom/pixi.js'),
            'phaser': helpers.root('/node_modules/phaser/build/custom/phaser-split.js')
        }
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            {
                test: /\.ts?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=img/[path][name].[ext]&context=./app/images'
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency',
            metadata: METADATA,
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['app', 'vendors']
        }),
        new CopyWebpackPlugin([
            {from: 'src/assets', to: 'assets'}
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            p2: 'p2',
            'window.$': 'jquery',
            PIXI: 'pixi',
            phaser: 'phaser',
            Phaser: 'phaser'
        })
    ]
};