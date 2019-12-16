<template>
  <section class="section">
    <div id="div1" class="">
      <div id="div2" class="box">
        <img :src='imageUrl'>
      </div>
      <form @submit.prevent="uploadAvatar" enctype="multipart/form-data">
        <div id= "button" class="file is-boxed is-primary">
          <label class="file-label">
          <input class="file-input" type="file" ref="file" @change="handleFileUpload()"/>
          <span class="file-cta">
            <span class="file-icon">
              <i class= "fa fa-upload"></i>

            </span>
          </span>
          </label>
          <button class="button is-secondary" @click="singleImage">Save</button>
          <button class="button is-success"> submit</button>
        </div>
      </form>
  <div id="div3">
    <p>Lakshmaiah</p>
  </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      file:'',
      image:'',
      _id:this.$route.params.id,
      Url:"http://localhost:3000/posts/images/",
      imageUrl:'',
    }

  },
  methods:{

  //           // const fd= new FormData();
  //           //  fd.append('image', this.avatarUrl);
  //           const fileReader= new FileReader();
  //           fileReader.addEventListener('load',()=>{
  //           this.avatarUrl= fileReader.result;
  //           console.log(this.avatarUrl);
  //           })

    handleFileUpload(){
      console.log(this.$refs.file);
      console.log('hlooooooooooooooooooo');
      this.file=this.$refs.file.files[0];
    },
    uploadAvatar:function(){
      const fd= new FormData();
      fd.append('file', this.file);
      console.log('asdfg')
      this.$http.post('http://localhost:3000/posts/uploadAvatar',fd)
        .then(function(data){
          //  console.log('>>>>', data.body._id);
           this.imageUrl = "http://localhost:3000/posts/images/"+data.body._id;
            console.log(this.imageUrl);
            alert("Added successfully...");
            const fileReader= new FileReader();
            fileReader.addEventListener('load',()=>{
            this.file= fileReader.result;
            console.log('lalalaalalal',this.file);
        });
    });
    },
    singleImage:function(){
    console('lakshmaiah')
    this.$http.get('http://localhost:3000/posts/images'/+_id).then(function(data){
    console.log(this._id);
    })
  }
  }
}
</script>
<style scoped>
#div2{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.box{
  width: 300px;
  height: 200px;
}
#button{
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.button{
   position: absolute;
  top: 50%;
  left: 150%;
  transform: translate(-50%, -50%);
}
</style>
