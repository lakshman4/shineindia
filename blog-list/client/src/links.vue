<template>
<nav class="navbar is-primary is-fullwidth">
    <div class="navbar-brand">
        <a class="navbar-item" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9q-mO6yAvvUxnT5z76ydclrAgkxBRhJ-9S5US4VsE89VjybElKA"></a>
    </div>
    <div class="navbar-menu">
    </div>
      <li>
            <p >
               <router-link to="/signup"><span class="icon"><i class="fa fa-file-text-o"></i></span><b>Signup</b></router-link></p>
        </li><br>
       <div  class="navbar-end">
           <a href="#" ><i id="user" class="fa fa-user-circle is-large"></i></a>
       </div>
  
</nav>

</template>
<script>
export default {
      data(){
        return{

        }
    }
}
</script>
<style scoped>
#user{
   
}


</style>
