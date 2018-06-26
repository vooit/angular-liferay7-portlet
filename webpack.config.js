var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

// const SRC  = path.resolve(__dirname, "src");
const SRC  = path.resolve(__dirname, "app");
const DEST = path.resolve(__dirname, "src/main/resources/META-INF/resources/dist");
const APP  = path.join(SRC, "app");

module.exports = {
    entry: {
        "js/vendor.bundle": "./app/app/vendor.ts",
        "js/main.bundle": "./app/app/main.ts"
    },
    output: {
        path: DEST,
        filename: '[name].js',
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader?silent=true!angular2-template-loader' },
            { test: /\.css/, exclude: SRC, loader: 'style-loader!css-loader' },
            { test: /\.(css|html)/, include: SRC, loader: 'raw-loader' },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.html'],
    },
    devServer: {
        publicPath: "/",
        contentBase: DEST,
        port: "4200"
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.join(SRC, "index.html")}),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, SRC),
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
    ],
    devtool: 'cheap-module-source-map'
}
