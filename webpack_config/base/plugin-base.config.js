const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const dirVars = require('./dir-structure.config.js');
const pageArr = require('./page-entries.config.js');
const fs= require('fs');
let configPlugins = [
    new webpack.ProvidePlugin({//此插件作用为，当出现$未被引用时，会自动引用jquery作为$值
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
    }),
    new webpack.DllReferencePlugin({
        context: dirVars.staticRootDir, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
        manifest: require('../../manifest.json'), // 指定manifest.json
        name: 'dll',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
    }),
    new ExtractTextPlugin('[name]/styles.[chunkhash].css'),
];

pageArr.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page}/${page}.html`,
        path_dll:path.relative(path.resolve(dirVars.buildDir,'./${page}'),path.resolve(dirVars.dllDir,'./dll.js')),
        path_css:path.relative(path.resolve(dirVars.buildDir,'./${page}'),path.resolve(dirVars.dllDir,'./styles.css')),
        template:    fs.existsSync(path.resolve(dirVars.especialDir, `./${page}/template.ejs`))?path.resolve(dirVars.especialDir, `./${page}/template.ejs`):path.resolve(dirVars.especialDir, `./${page}/page.html`),
         chunks: [page, 'commons/commons'],
        favicon:path.resolve(dirVars.staticRootDir,'./20170508100549682_easyicon_net_128.ico')
       // hash: true, // 为静态资源生成hash值,
        // xhtml: true,
    });
    configPlugins.push(htmlPlugin);
});
module.exports = configPlugins;