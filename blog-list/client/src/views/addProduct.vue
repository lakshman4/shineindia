<template>
<section class="section">


      <div class="columns">
        <div class="column is-half">

       <form id= "form">
        <label class="label">Product Name:</label>
        <input class="input" id="searchBox" type="text" v-model="product.name" required>

        <label class="label" >Price:</label>
        <input id="searchBox" type="number" class="input" v-model="product.price" required>
          <label class="label">Product Model:</label>
        <input class="input"  id="searchBox" type="text" v-model="product.model" required>
        <br></br>
         <button class="button is-primary"  v-on:click.prevent="addProduct(product)">Add Product</button>
        </form>
        </div>
        </div>



</section>
</template>

<script>
 import Vue from 'vue'
 import vueValidate from'vee-validate'
 import products from '../services/products'
 import {Product} from '../services/productData'
     Vue.use(vueValidate);
export default {
  data(){
    return{
      product:{
        name:"",
        price:"",
        model:"",
      },
      productList:{}


    }
  },
    methods: {
     async addProduct(product){
        let proValue;
        if(this.product.name=="" || this.product.price=="") {
          alert("Please add something")
        }
        else{
          let proObj= new Product(
           this.product.name,
           this.product.price,
           this.product.model
          );
          try{
           // console.log("event clcked ");
          let proValue=  await products.createProduct(product);
             console.log("event clcked ");
             console.log(proValue.data);
          if(proValue.status==200){
            alert("added successfully");
             window.location.reload();
          }
          else{
            alert("something went wrong");
          }
          }
          catch(e){
            console.log(e)
          }
          }
        }
      },
      async created(){
          let response='';
          response= await products.productList();
          this.productList= response.data;
          console.log('lakshmaiah',this.productList);
        }
}
</script>

<style scoped>
#searchBox{
  position: relative;
  width: 350px;

}
#form{
  position: relative;
  align-content: right;
}
.section{
  background-color: #67926C;
}
</style>

