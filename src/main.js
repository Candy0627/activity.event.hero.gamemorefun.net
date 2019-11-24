import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import qs from 'qs'
import axios from 'axios'
import layer from 'vue-layer'
import Mint from 'mint-ui'
import { Toast } from 'mint-ui'
import moment from 'moment'
moment.locale('zh-cn')

import '../static/js/rem'

import '../static/styles/reset.css'
import '../static/styles/animate.css'
import '../static/styles/common.css'

Vue.prototype.$layer = layer(Vue);
Vue.prototype.$qs = qs;
Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
