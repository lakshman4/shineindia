import Vue from 'vue'
import productList from './views/productList';
import Router from "vue-router";
import productAdd from '../../client/src/components/components/productAdd'
import homePage from './views/homepage';
import login from './views/login'
import menu from './views/menu';
import list from './views/list';
import purchasedList from './components/components/purchasedList';
import {mapState} from 'vuex';


Vue.use(Router);
 const router= new Router({
  token:'',
  mode: "history",
  routes:[
  {
    path:'',
    component:homePage,
    name:"home",
    props:true
  },
  {
    name:"productList",
    path:'/list',
   component:productList
  },
   {
     path:'/add',
    component:productAdd
  },
  {
  name:"/",
  path:'/login',
  component:login,
  props:true
  },
  {
    name:"menu",
    path:'/menu',
    component:menu,
    props:true
  },
  {
    name:"list",
    path:'/lists',
    component:list,
  },{
    name:"purchasedList",
    path:"/purchasedList",
    component:purchasedList
  }
],
})

router.beforeEach((to, from, next) => {
  const auth=window.localStorage.getItem('auth-token');
  if (to.fullPath !== '/login') {
    if (!auth) {
      next('/login');
    }
  }
  if (to.fullPath === '/login') {
    if (auth) {
      next('/');
    }
  }
  next();
});
export default router;
