<template>
<div id="app">

 <div  data-content="OR"></div>
<div v-theme="'wide'" id="showblogs">
     <h1 class="title">All the blogs</h1>
     <input class="input" type="text" v-model="search" placeholder="search blog">
     <button class="button is-warning">Search</button>
     <!-- <table class="table is-fullwidth">
         <thead>
             <th>All the blogs</th>

         </thead>
             <tbody>
                 <tr>
                     <td>
                         <div v-for="blog in fiteredBlogs" :key="blog.id" class="single-blog">

                        <router-link v-bind:to="'/blog/'+ blog.id"><h3 v-rainbow="">{{blog.title | to-uppercase}}</h3>
                         <button class="button is-success">Read more</button></router-link>

                        <button class="button is-danger"  @click="deletePost(blog.id)">Delete</button>
                        </div>

                        </td>
                 </tr>
             </tbody>

         </table> -->
         <div v-for="blog in fiteredBlogs" :key="blog.id" class="single-blog">
<h1 id="col" class="title is-centered"><strong>Title</strong>
    :{{blog.title | to-uppercase}}</h1>

    <article> <strong>Content:</strong>{{blog.content}}</article>
    <p><strong>Author: </strong>{{blog.author}}</p>
    <p><strong>Date: </strong>{{blog.date}}</p>
  <ul>
                <li v-for="category in blog.categories"><strong>Category:</strong>{{category}}</li>
            </ul>
                      <router-link v-bind:to="'/blog/'+ blog.id"><h3 v-rainbow="">{{blog.title | to-uppercase}}</h3>
                         <button class="button is-success">Read more</button></router-link>
                        <button class="button is-danger"  @click="deletePost(blog._id)">Delete</button>


                        </div>

     </div>
</div>

</template>

<script>
 import toastMixin from '../src/mixins/fieldMixin';
export default {
data(){
    return{
   blogs:[],
   search:'',
   blog:{},
   _id:this.$route.params._id,

    }
},
  mixins: [toastMixin],
methods:{
   deletePost(_id){
      if( this.confirmCustomDelete() ){
       console.log(_id)
       console.log('sssss')
           this.$http.delete('http://localhost:3000/posts/delete/'+_id).then(function(data){
             return data.json()
                     }).then(data=>{
                          window.location.reload();
                          console.log(data)
                          console.log('alalakak')
                     });
      }
                //   return data.json()
                    //  }).then(data=>{
                    //      console.log(data)
                    //      this.blog = id
                    //      return this.id;
                    //  });
    }
},

created(){
      this.$http.get('http://localhost:3000/posts/lists').then(function(data){
         return data.json();
          window.location.reload();

      }).then (function(data){
          var blogsArray=[];
          for(let key in data){
              data[key].id=key
              blogsArray.push(data[key]);
          }
          this.blogs=blogsArray;
          console.log(blogsArray);


      })
},
        computed:{
            fiteredBlogs:function(){
                return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
                });
            }
        },
        filters:{
            'to-uppercase':function(value){
                return value.toUpperCase();
            }
        },
    directives:{
        'rainbow':{
            bind(el,binding,vnode){
                el.style.color="#"+Math.random().toString().slice(2,8)
            }
        }
    }

    }
</script>

<style scoped>
h1{
    background-color:white;
}
#showblogs{
   max-width:800px;
    margin: 0 auto;


}
.single-blog{
    padding:100px;
    margin:100px 0;

    background: rgba(77, 126, 175, 0.4);

}
input[type=text]{
        display:block;
        width:100%;
        height:30px;
}
</style>
