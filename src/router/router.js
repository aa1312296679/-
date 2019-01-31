import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import Raise from '@/views/Raise/Raise'
import Money from '@/views/Money/Money'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Money',
      name: 'money',
      component: Money
    },
    {
      path: '/Raise',
      name: 'raise',
      component: Raise
    }
  ]
})
