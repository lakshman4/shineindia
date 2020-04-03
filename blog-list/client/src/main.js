import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import VueResource from 'vue-resource'
// import blog from './blog.vue'
// import showblogs from './showblogs'
import VueRouter from 'vue-router'
import router from './routes'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import babelPolyfill from 'babel-polyfill'


Vue.use(Buefy);
import { ToastProgrammatic as Toast } from 'buefy'
Toast.open('LAkshman toast!')
Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store:store,
})

