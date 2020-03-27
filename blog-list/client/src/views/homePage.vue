<template>
  <div>
<nav class="navbar is-primary">
  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io/">
        Home
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
         Main Menu
        </a>
        <div class="navbar-dropdown is-boxed">
          <router-link to="/lists">
          <a class="navbar-item" >
           All The Products
           </a>
           </router-link>
          <router-link to="/add">
          <a class="navbar-item" >
           Add New Product
          </a>
          </router-link>
           <router-link to="/purchasedList">
          <a class="navbar-item" >
           Purchased Products
          </a>
          </router-link>

        </div>
      </div>
    </div>
  </div>
</nav>
    <h1>Product Management</h1>
    <br>
    <div class="columns">
      <div class="column is-md">
        <div class="card">
          <div class="card-content">
            <div class="content">
           <router-link to="/lists">
          <a class="navbar-item" >
           Total Products  : {{productsCount}}
          </a>
          </router-link>
        </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="content">
         <router-link to="/purchasedList">
          <a class="navbar-item" >
           Purchased Products  : {{purchasedCount}}
          </a>
          </router-link>
        </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="content">
         <router-link to="/add">
          <a class="navbar-item" >
            <span>Add New Product<i class=" fa fas-plus"></i></span>
          </a>
          </router-link>
        </div>
          </div>
        </div>

      </div>
    </div>
    <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Product Management</strong> by <a href="https:github.com/lakshman4">Lakshmaiah</a>.
    </p>
  </div>
</footer>
</div>

</template>

<script>
import products from '../services/products';
export default {
    data(){
     return {
       productsCount:'',
       purchasedCount:''
     }
    },
    mounted(){
       Promise.all([this.productCount(),this.purchaseCount()])
        .then(function() {
      });

    },
    methods:{
        async productCount(){
        let res1='';
        res1= await products.getProductCount();
        this.productsCount=res1.data;
        console.log(this.productCount);
      },
        async purchaseCount(){
        let res2='';
        res2= await products.getPurchasedList();
        this.purchasedCount=res2.data.length;
        console.log(this.purchasedCount);
      }
    }
  }
</script>

<style>

</style>
