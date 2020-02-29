"# toudo" 
vue-template-compiler 作用直接读取处理了.vue文件内容，将文件分成了三部分，
每个部分里面的content就是里面的内容
// 新版能把.vue里面的style样式也打包到压缩的js代码文件里面
旧的webpack.config.js在运行build的时候会报错，改为下面的就不会了
开头加上这句
const VueLoaderPlugin = require('vue-loader/lib/plugin');
rules数组加上下面两个对象
{test: /\.css$/,use: 'css-loader'},
{test: /\.ts$/,use: 'ts-loader'}
在module:{}后面加上一个同级的键值对如下
plugins: [
new VueLoaderPlugin()
]
