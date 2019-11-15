import Vue from 'vue'
import App from './App.vue'
import Footer from './components/Shared/Footer'
import Header from './components/Shared/Header'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
 
Vue.use(BootstrapVue)
Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

new Vue({
  el: '#app',
  render: h => h(App) 
})
