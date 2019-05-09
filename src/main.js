import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

//反向代理获取数据
import axios from 'axios'
Vue.prototype.axios = axios;

//过滤器
Vue.filter('setWh',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);

import Loading from '@/components/Loading'
Vue.component('Loading',Loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
