const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        host:'0.0.0.0',
        port: 9000,
        open: true
    },
    plugins: [HtmlWebpackPluginConfig]
};
