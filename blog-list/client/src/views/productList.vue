<template>
<section id="tableSection">
   <Vuetable
              ref="Vuetable"
              :api-mode="false"
              :fields="headers"
              :data="productsList"
            >
           <div slot="price" slot-scope="props"><span>$<i class="fa fas-dollar-sign"></i></span><strong>{{props.rowData.price}}</strong></div>
           <div slot="name" slot-scope="props"><span>$<i class="fa fas-dollar-sign"></i></span><strong>{{props.rowData.name}}</strong></div>
           <div slot="actionFields" slot-scope="props">
            <button class="button is-danger" @click="deleteProduct(props.rowData._id)">
              <a href="https://google.com"></a>Delete</button>
              <button class="button is-primary"  @click.prevent="addToCart(props.rowData)">
                Add to Cart</button>
                <b-modal :active.sync="isComponentModalActive"
                 has-modal-card
                 trap-focus
                 aria-role="dialog"
                 aria-modal>
           <modal :product="product"></modal>
         </b-modal>
         </div>
   </Vuetable>
</section>
</template>
<script>
import Vuetable from 'vuetable-2'
import products from '../services/products'
import Product from '../services/productData'
import modal from '../components/components/modal'
import { mapState } from 'vuex'

export default {
components:{
 Vuetable,
 modal,
},
data(){
return{
  isComponentModalActive:false,
  headers:[
         {
          name: "name",
          title: "Product Name",
          width: "21.5%"
        },
         {
          name: "model",
          title: '<i class="fa fa"></i>Model ',
          width: "22%"
       },
        {
          name: "price",
          title: "Price",
          width: "12%"
        },
        {

        name:"actionFields",
        title:"Actions",
        width:"23%"
        }
    ],
      productsList:[],
      _id: this.$route.params._id,
      product:{

      },
      isModalActive:false,
}
},
       async created(){
          let response='';
          response= await products.productList();
          this.productsList= response.data;
          console.log('lakshmaiah',this.productsList);
        },

        methods: {
        openModal(){
          console.log("hloooooooooooooooooooo")
          this.isModalActive=true;
        },
         async deleteProduct(id) {
            console.log(id);
            return await products.deleteProduct(id);
            window.location.reload();
          },
          async addToCart(product){
             console.log("!!!!!!!!!!!!!!!!!!!", product);
             this.product = product;
             this.isComponentModalActive = true
             //return await products.purchaseProducts(product);
             this.isModalActive=true;
          }
        },
}
</script>

<style scoped>

#tableSection{
  background-color: blueviolet

}
</style>>

