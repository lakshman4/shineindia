import showblogs from './showblogs.vue'
import links from './links.vue'
import blog from './blog.vue'
import single from './single.vue'
import signup from './signup.vue'
import login from './login'
import sideMenu from './sideMenu.vue'
import slots from './slots.vue'
export default[
   {name:'home',path:'/',component:login},
    {name:'login',path:'/login',component:login},
    {path:'/add',component:blog},
    {path:'/blog/:id',component:single},
    {name:'showblogs',path:'/show',component:showblogs},
    {path:'/signup',component:signup},
    {name:'menu',path:'/dashboard',component:sideMenu},
    {name:'slots',path:'/slots',component:slots}


]
