<template>

<nav class="menu">
    <p id="menu" class="menu-label"><b>Menu</b></p>
    <ul id="rec" class="menu-list">
        <li>

               <router-link to="/show"><span class="icon"><i class="fa fa-address-book"></i></span><b>Show Blogs</b></router-link>
        </li>
         <li>
            <p >
               <router-link to="/add"><span class="icon"><i class="fa fa-file-text-o"></i></span><b>Add Blogs</b></router-link></p>
        </li><br>
        <br>
         <li>
            <p >
               <router-link to="/login"><span class="icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span><b>Logout</b></router-link></p>
        </li>

    </ul>

</nav>
        </template>
        <script>
        export default{
           data(){
               return{
                //    website:"https://stage.manufacton.com",
                //     color:'red',
               }

           },
           methods:{


           }

            }

        </script>
        <style scoped>
        #menu{
            background-color:lightblue;
            padding:10px;

        }
        #rec{
         background-color: aliceblue;
         padding-block: 40px;

        }
        </style>
