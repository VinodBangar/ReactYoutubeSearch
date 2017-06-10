module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            devServer: {
                contentBase: './'
            }
        }]
    }
};

