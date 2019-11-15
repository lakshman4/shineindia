<template>

<div id="lakshman">
    <div id="add-blog">
        <div id="box" class="box">
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
        <h1 class="title">Add blog to your post</h1>
        <form>
        <label class="label">Blog Title:</label>
        <input class="input" type="text" v-model="blog.title" required>
        <label class="label" >Blog Content:</label>
        <textarea id="lak4" class="input" v-model="blog.content" required></textarea>
          <label class="label">Blog Author:</label>
        <input class="input" type="text" v-model="blog.author" required>
        <input class="input" type="file" id="mainimage" ref="file" v-on:change="handleFileUpload()" required>
        <br>
        </form>
           <!-- <button class="button is-warning" v-on:click="clearInputs">Reset</button> -->
           <button class="button is-primary"  v-on:click.prevent="addBlog">Add blog</button>
        </div>
       </div>
</div>
  </template>

    <script>
    import toastMixin from '../src/mixins/fieldMixin';
    import Vue from 'vue'
    import vueValidate from'vee-validate'
     Vue.use(vueValidate);
    export default {

    data(){
        return{

            blog:{
                errors:[],
                title:'',
               content:'',
                categories:[],
                author:'',
              file:'',
            },

        }
    },
    mixins: [toastMixin],
    methods:
    {
       handleFileUpload(){
        this.file = this.$refs.file.files[0];
      },
        addBlog:function(){
              let formData = new FormData();
               formData.append('file', this.file);
               console.log(this.blog.title)
               if(this.blog.title === '' || this.blog.content === ''){
                //alert('Cannot empty title and content');
                this.toast("is-danger", "Fields can't be empty", "is-top");
            }
            else{
            this.$http.post('http://localhost:3000/posts/upload',this.blog,formData,
            {
            headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )
              .then(function(data){
                console.log(data)
                 this.toast("is-success", "Blog added", "is-top");
                this.$router.push({
                                     name:'showblogs'
                                                        })
            });

            }
        },


        },
    }
    </script>

    <style>
    #lak4{
      width: 500px;
      height: 80px;
    }
    #box{


    }
    #add-blog *{
        box-sizing:border-box;
    }
    #add-blog{
        margin:20px auto;
        max-width:500px;
    }
    label{
        display:block;
        margin:20px 0 10px;
    }
    input[type=text],textarea{
        display:block;
        width:100%;
    }
    input[type=text]{
        height: 30px;
    }
    textarea{
        height: 50px;
    }
    #preview{
        padding:20px 10px;
        nargin: 30px 0;
        border:1px dotted #ccc;

    }
    h3{
        margin-top:10px;
    }
    #checkbox input{
        display:inline;
        margin-right:10px;

    }
    #checkbox label{
        display:inline;
    }
    button{
        background-color: purple;

    }
    #lakshman{
       color: #000;
    }


    </style>





