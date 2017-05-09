const dirVars = require('./dir-structure.config.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  rules: [
      {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
              presets: [['es2015', { loose: true }]],
              cacheDirectory: true,
              plugins: ['transform-runtime'],
          },
      },
      {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        loader: 'css-loader',
                        fallbackLoader: 'vue-style-loader',// <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        publicPath :"../"//坑死我了，之前完全不知道有这个参数，出来的图片位置都不对
                    })
                }
          }
      },
      {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader",
              publicPath :"../"//坑死我了，之前完全不知道有这个参数，出来的图片位置都不对
          })

      },
      {
          test: /\.json$/,
          loader: "json-loader" //这里在webpack 2中，必须加上-loader后缀
      },
      {
          test: /\.html$/,
          loader: "html-withimg-loader"
      },
    //
    //
    {
      // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
      // 如下配置，将小于8192byte的图片转成base64码
      test: /\.(png|jpg|gif)$/,
      include: dirVars.srcRootDir,
      // loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
      loader: 'url-loader',
      options: {
        limit: 8192,
        name: './static/img/[hash].[ext]',
      },
    },
    // {
    //   // 专供bootstrap方案使用的，忽略bootstrap自带的字体文件
    //   test: /\.(woff|woff2|svg|eot|ttf)$/,
    //   include: /glyphicons/,
    //   loader: 'null-loader',
    // },
    // {
    //   // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
    //   test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
    //   include: dirVars.srcRootDir,
    //   // exclude: /glyphicons/,
    //   // loader: 'file-loader?name=static/fonts/[name].[ext]',
    //   loader: 'file-loader',
    //   options: {
    //     name: 'static/fonts/[name].[ext]',
    //   },
    // },

  ],
};
