import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      name: 'ad',
      component: () => import(/* webpackChunkName: "ads" */ './views/ads/Ad.vue')
    },
    {
      path: '/new',
      name: 'newAd',
      component: () => import(/* webpackChunkName: "ads" */ './views/ads/NewAd.vue')
    },
    {
      path: '/list',
      name: 'adList',
      component: () => import(/* webpackChunkName: "ads" */ './views/ads/AdList.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "auth" */ './views/auth/Login.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import(/* webpackChunkName: "auth" */ './views/auth/Registration.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import(/* webpackChunkName: "orders" */ './views/orders/Orders.vue')
    }
  ],
  mode: 'history'
})
