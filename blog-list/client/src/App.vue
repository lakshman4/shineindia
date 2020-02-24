<template>

  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>

</template>
<script>
import productAdd from './components/components/productAdd';
export default {
 components:{
productAdd,
 },
 data(){
   return{
   methods:{
   },

   }
 }
   }
</script>

<style scoped>
h1{
  color:green
}

</style>
