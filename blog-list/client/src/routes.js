import productList from './views/productList';
import productAdd from '../../client/src/components/components/productAdd'
import homePage from './views/homepage';
import login from './views/login'
import menu from './views/menu';
import list from './views/list';
import purchasedList from './components/components/purchasedList';


export default[
  {
    path:'/',
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
    name:"",
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

]
