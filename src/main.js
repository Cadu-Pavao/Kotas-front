import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'// bootstrap base file
import 'bootstrap-vue/dist/bootstrap-vue.css'// bootstrap vue base file

import './styles/reset.scss' //reset css
import './styles/theme.scss' //custom theme for project file
import './styles/stylesheet.scss' //import SCSS file

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
