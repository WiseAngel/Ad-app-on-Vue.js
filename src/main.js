import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase"

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    let config = {
      //add config
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
