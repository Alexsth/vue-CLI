import Vue from 'vue'
import App from './App.vue'
import first from './first.vue'
Vue.component('players', first)
new Vue({
  el: '#app',
  render: h => h(App)
})
