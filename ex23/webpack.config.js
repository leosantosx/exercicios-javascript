const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    
    mode: isDevelopment ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    devtool: isDevelopment? 'eval-source-map' : 'source-map',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    resolve: {
        extensions: ['.jsx', '.js'],
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ],

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css|scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
};