import Vue from 'vue'
import App from './App.vue'
import NnUi from '../packages/index.js'

Vue.config.productionTip = false

Vue.use(NnUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
