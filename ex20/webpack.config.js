module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        publicPath: '/',
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'style-loader'
                }
            ]
        }],
    },

    devServer: {
        open: true,
        contentBase: './dist'
    }
}