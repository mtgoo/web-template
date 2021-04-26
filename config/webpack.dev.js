const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.base');

const config = require("./config");

module.exports = {
    ...baseConfig,
    mode: 'development',
    devtool: "eval-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        ...baseConfig.plugins,
    ],
    devServer: {
        host: '0.0.0.0',
        port: config.devServerPort,
        contentBase: path.join(__dirname, '../public'),
        watchContentBase: true,
        publicPath: '/',
        compress: true,
        historyApiFallback: false,
        hot: true,
        clientLogLevel: 'error',
        open: false,
        overlay: false,
        quiet: false,
        noInfo: false,
        watchOptions: {
            ignored: /node_modules/
        },
        proxy: {},
        disableHostCheck: true,
        stats: {// 设置控制台的提示信息
            colors: true,
            children: false,
            chunks: false,
            chunkModules: false,
            modules: false,
            builtAt: false,
            entrypoints: false,
            assets: false,
            version: false,
            errorDetails: true,
            profile: true
        },
    }
}