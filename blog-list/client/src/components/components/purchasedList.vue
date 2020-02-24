<template>
<Vuetable
              ref="Vuetable"
              :api-mode="false"
              :fields="headers"
              :data="purchaseProductList"
            >
</Vuetable>
</template>

<script>
import Vuetable from 'vuetable-2'
import products from '../../services/products'
export default {
  components:{
    Vuetable,
  },
data(){
  return{
   purchaseProductList:[],
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
          name: "quantity",
          title: "Total Quantity",
          width: "12%"
       },
        {
          name: "price",
          title: "Total Price",
          width: "12%"
        },
        {
          name: "deliveryLocation",
          title: "Delivery Location",
          width: "12%"
        },
        {
        name:"actionFields",
        title:"Actions",
        width:"23%"
        }
    ],






  }
},

     async created(){
     let response='';
     response= await products.getPurchasedList()
     this.purchaseProductList=response.data;
     console.log('purchaseList',this.purchaseProductList)
}


}
</script>

<style>

</style>
