import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import 'styles/reset.scss'
import fastClick from 'fastclick'
//导入模块并解构导出结果的IntiBetterScroll属性
import { InitBetterScroll }  from 'common/core/InitBscroll/index.js'
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(InitBetterScroll)
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
