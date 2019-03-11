import Vue from 'vue'
import App from './App.vue'
import Chat from './index.js'

Vue.use(Chat)

new Vue({
  render: h => h(App)
}).$mount('#app')
