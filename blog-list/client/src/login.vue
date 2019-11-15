
<template>

   <section class="hero ">
     <nav class="navbar"></nav>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-6-tablet is-6-desktop is-5-widescreen">
          <form action="" class="box">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g. Lakshmaiah@gmail.com" class="input" v-model="user.email" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input"  v-model="user.password" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox">
               Remember me
              </label>
            </div>
            <div class="field">
              <button class="button is-success" @click.prevent="loginUser()">
                Login
              </button>
              <router-link to="/signup"><span class="icon"></span><b>Create New Account</b></router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


</template>
<script>
import toastMixin from '../src/mixins/fieldMixin';
export default {
      data:function(){
        return{
         user:{
           email:'',
           password:'',
         }
        }
      },
          mixins: [toastMixin],
        methods:{
          loginUser: function(){
             console.log(this.user.email)

            this.$http.post('http://localhost:3000/reg/login',this.user)
             .then(function(data){
               console.log(data);
               console.log('viviv', data.status);
              if(data.status === 200){
                this.$router.push({ name:"menu" });
                //alert('Loggedin Successfully');
                this.toast("is-success", "Welcome back", "is-top");
              }

             }).catch(function(err) {
              // alert("please check your credentials")
               this.toast("is-danger", "Invalid email or password", "is-top");
             })
          },
        }
    }

</script>
