// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].bundle.css');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './'
    },
    module: {
        rules: [{
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: { limit: 10000 } // Convert images < 10k to base64 strings
                }]
            }, {
                test: /\.scss$/,
                loader: extractCSS.extract(['css-loader', 'sass-loader'])
            }, {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', { modules: false }]
                        ]
                    }
                }]
            },
            /* {
                            test: require.resolve('jquery'),
                            use: [
                                { loader: 'expose-loader', options: 'jQuery' },
                                { loader: 'expose-loader', options: '$' }
                            ]
                        },*/

            {
                test: require.resolve('tether'),
                use: [
                    { loader: 'expose-loader', options: 'Tether' }
                ]
            }
        ]
    },
    plugins: [
        extractCSS,
        //new HtmlWebpackPlugin()
        // ...
    ]
};

module.exports = config;