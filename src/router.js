import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AuthGuard from './routes/auth-guard'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'ad',
      component: () => import('./views/ads/Ad.vue')
    },
    {
      path: '/new',
      name: 'newAd',
      beforeEnter: AuthGuard,
      component: () => import('./views/ads/NewAd.vue')
    },
    {
      path: '/list',
      name: 'adList',
      beforeEnter: AuthGuard,
      component: () => import('./views/ads/AdList.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/auth/Login.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('./views/auth/Registration.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      beforeEnter: AuthGuard,
      component: () => import('./views/orders/Orders.vue')
    }
  ],
  mode: 'history'
})
