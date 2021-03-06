import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/handleStatus',
      name: 'handleStatus',
      component: () => import('@/views/handleStatus')
    }
  ]
})
