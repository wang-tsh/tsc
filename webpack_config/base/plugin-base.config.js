const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pageArr = require('./page-entries.config.js');
let configPlugins = [];

pageArr.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page}/${page}.html`,
        // chunks: [page, 'commons/commons'],
        hash: true, // 为静态资源生成hash值
        xhtml: true,
    });
    configPlugins.push(htmlPlugin);
});
module.exports = configPlugins;