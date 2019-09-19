<template>

  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>

</template>
<script>
import {fieldMixin} from '../src/mixins/fieldMixin';
import links from './links.vue'
import data from './data.vue'
import slots from './slots.vue'
import blog from './blog.vue'
import showblogs from './showblogs.vue'
import single from './single.vue'
 import props from './props.vue'
import sideMenu from'./sideMenu.vue'
import signup from './signup.vue'
import login from './login.vue'
export default {
 components:{
   'app-links':links,
   'app-signup':signup,
   'app-data':data,
   'app-slots':slots,
   'app-blog':blog,
   'app-showblogs':showblogs,
   'app-single':single,
   'app-props':props,
   'app-sideMenu':sideMenu,
   'app-signup':signup,
   'app-login':login
 },

 data(){
   return{
   methods:{

   },
    mixin:[fieldMixin],
   }
 }
   }
</script>

<style scoped>
h1{
  color:green
}

</style>
