const path = require('path')    // 路径包
// 新版能把.vue里面的style样式也打包到压缩的js代码文件里面
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: path.join(__dirname, 'src/index.js'),         //声明js文件入口,__dirname就是我们文件的根目录,用join拼接
  output: {                                            //声明出口文件
    filename: 'bundle.js',                          //将挂载的App全部打包成一个bundle.js,在浏览器中可以直接运行的代码  
    path: path.join(__dirname, 'dist')               //bundle.js保存的位置
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}