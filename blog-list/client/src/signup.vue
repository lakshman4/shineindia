<template>
<div id="app">
   <div class="hero is-fullwidth">

       <div class="columns is-centered ">
           <div class="column is-12-desktop is-6-tablet is-4-widescreen">

               <div class="field">
                   <form id="signup">
                       <label class="label">Name</label>
                       <input class="input" type="text" v-model="user.name" required/>
                       <label class="label">Mobile Number</label>
                       <input class="input" type="number" v-model="user.mobile" required/>
                       <label class="label">Email</label>
                       <input class="input" type="email" v-model="user.email" required/>
                        <label class="label">Password</label>
                       <input class="input" type="password" v-model="user.password" required/>
                       <br>
                       <div class="field">
                       <button class="button is-primary" v-on:click="addUser">Create Account</button>
                       </div>
                   </form>
               </div>
           </div>
       </div>
           </div>

</div>
</template>
<script>
export default{
    data(){
    return{
        user:{
            name:'',
            email:'',
            mobile:'',
            password:''

        },
    }
    },
    methods:{
      addUser:function(){
        console.log(this.user.name)
            if(this.user.name === '' || this.user.email === ''){
                alert('Name and Email should not be empty...');
            }
            else{
        this.$http.post('http://localhost:3000/reg/add',this.user)
        .then(function(data){
            console.log(data);
            this.$router.push({ name:"login" });
            alert("Account created successfully...")

        })
            }
    },
}
}
</script>
<style scoped>
footer {
    padding:10px;
    background:black;
}
p{
  color:lightblue;
  text-align:center;
}
#signup{

  padding-top: 150px;
}
.field{
  margin-top: 40px;
  background-color: #3CAEA3;

}

</style>
