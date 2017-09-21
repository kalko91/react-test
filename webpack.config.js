const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/public/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: ['.jsx', '.js', '.html', '.css', '.scss'],
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: ['babel-loader','eslint-loader'], exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                },
                    {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                },
                    // {
                    //     loader: "css-loader",
                    //     options: {
                    //         modules: true,
                    //         localIdentName: '[name]__[local]___[hash:base64:5]'
                    //     }// translates CSS into CommonJS
                    // }, {
                    //     loader: "sass-loader",
                    //     options: {
                    //         modules: true,
                    //         sourceMap: true,
                    //         importLoaders: 2,
                    //         localIdentName: '[name]__[local]___[hash:base64:5]'
                    //     }// compiles Sass to CSS
                    // }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    { loader: 'svg-sprite-loader', options: { } },
                    'svg-fill-loader',
                    'svgo-loader'
                ]
            }
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
