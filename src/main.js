import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    let config = {
      apiKey: 'AIzaSyCvqrvxq3IT14kZOQBW86nK4Qq2ZpnNTo0',
      authDomain: 'wfm-ads.firebaseapp.com',
      databaseURL: 'https://wfm-ads.firebaseio.com',
      projectId: 'wfm-ads',
      storageBucket: 'wfm-ads.appspot.com',
      messagingSenderId: '639654383553'
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    });
    this.$store.dispatch('fetchAds')
  }
}).$mount('#app');
