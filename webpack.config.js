const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCSSExtractPlugin =  require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // папка, где лежит main.html
        },
        compress: true,
        port: 8080,
        open: ['./dist/index.html'],
        hot: true         // "горячее" обновление
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: 'babel-loader' 
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ] 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'main.html'
        }),
        new MiniCSSExtractPlugin({
            filename: 'main.css'
        })
    ]
};