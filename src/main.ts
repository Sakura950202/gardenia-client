// 这个文件是vue的入口文件，用来初始化并且加载各种公共组件

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入axios
import axios from 'axios'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//	设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// 将axios绑定在vue的原型上
Vue.prototype.$axios = axios;

// 使用elementUI组件
Vue.use(ElementUI);

// 创建根实例，同时将实例挂载到id为app的元素上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
