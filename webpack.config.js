const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.jsx?$/, loader: 'babel-loader' },
            // { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
            // { test: /\.less$/, loader: ['style-loader', 'css-loader', 'less-loader'] }
            // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}