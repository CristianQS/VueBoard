import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionApi from '@vue/composition-api' 
import VueRX from 'vue-rx' 
import './assets/index.css';


Vue.config.productionTip = false
Vue.use(VueCompositionApi) 
Vue.use(VueRX) 


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
