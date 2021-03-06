// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import $ from 'jquery'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import App from './App'
import router from './router'
import store from './store'
import './assets/font/iconfont.css'
import "./assets/iconfont1/iconfont.css"
import './assets/js/animate.css'

// 曹
import "./assets/iconfont/iconfont.css"



Vue.use(MintUI)
var vm1=new Vue({})
Vue.use(vm1)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
