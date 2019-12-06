const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// get CSS
const HtmlWebpackPlugin = require('html-webpack-plugin');//make a template file -> dist folder
const TerserJSPlugin = require('terser-webpack-plugin');// js minification
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//css minification
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//clean dist folder before building new
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    performance: {
        hints: false
    },
    entry: {
        bundle: [SRC_DIR + "/assets/css/main.css" ,  SRC_DIR + "/assets/scss/core.scss"],
        "bundle.js": [
            SRC_DIR + "/app/index.js",
            SRC_DIR + '/assets/js/core.js',
            //SRC_DIR + '/src/assets/js/test.js'
        ],
    },
    output: {
        filename: 'assets/js/[name]',
        path: DIST_DIR,
        //publicPath: '',
    },
    plugins: [
         new CleanWebpackPlugin(),
         new HtmlWebpackPlugin({
             hash: true,
             //filename: 'index.html',
             template: 'src/index.html'
         }),
         new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            chunkFilename: 'assets/css/[name].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new CopyWebpackPlugin([
            {from:'src/assets/images',to:'assets/images'}
        ]),
    ],
    module: {
         rules: [
             {test: /\.js$/ ,
                 use:[
                     {
                         loader:'babel-loader'
                     }
                 ],
                 exclude: '/node_modules/'
             },
             {test: /\.jsx$/ ,
                 use:[
                     {
                         loader:'babel-loader'
                     }
                 ],
                 exclude: '/node_modules/'
             },
            {
                 test: /\.(png|jpe?g|gif)$/i,
                 use: [
                     {
                         loader: 'file-loader',
                     },
                 ],
             },
             {
                 test: /\.css$/,
                 use: [
                     {
                         loader: MiniCssExtractPlugin.loader,
                         options: {
                             publicPath: '../dist/assets/css/',
                         },
                     },
                     'css-loader',
                 ],
             },
             {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../dist/assets/scss/',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
        ]
    }
};