const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //eval-source-map 适合开发时使用，可以在调试时，eval执行原文件的连接。
    devtool: 'eval-source-map',
    //注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    entry:  __dirname + "/app/main.js",//唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "[name].[chunkhash].js" //打包后输出文件的文件名
    },

    module: {//在配置文件里添加JSON loader
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.json$/,
                loader: "json-loader" //这里在webpack 2中，必须加上-loader后缀
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html'
        })
    ],
    devServer: {
        //port	设置默认监听端口，如果省略，默认为”8080“
        contentBase: "./public", //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true //设置为true，当源文件改变时会自动刷新页面
    }
}