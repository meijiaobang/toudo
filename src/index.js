import Vue from 'vue'
import App from './app.vue'
const root = document.createElement('div')   //创建一个元素
document.body.appendChild(root)//放到body里面
new Vue({
  render:(h) => h(App)    //声明组件渲染出来的是app.vue的内容
  // 挂载
}).$mount(root)       // 把App的内容插到root里面         