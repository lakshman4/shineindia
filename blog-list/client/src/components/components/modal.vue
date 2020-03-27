<template>

<form action="">
  <p>{{getCurrentUser}}</p>
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Delivery details</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Quantity">
                            <b-input type="number"  min="0" max="20" v-model="quantity" required>
                            </b-input>
                        </b-field>

                        <b-field label="Delivery Location">
                            <b-input
                                type="text"
                                v-model="deliveryLocation" required>
                            </b-input>

                        </b-field>
                        <b-checkbox>Remember me</b-checkbox>
                    </section>

                     <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close()">Close</button>
                        <button class="button is-primary" @click.prevent="addToCart(product)">Submit</button>
                    </footer>
                </div>

            </form>

 </template>
 <script>
import products from '../../services/products'
import {mapState} from 'vuex';

export default {
  props:["product"],
   data() {
    return {
       isOpen: false,
       quantity:"",
       deliveryLocation:"",
       owner:"",
    };
  },
  computed:{
    ...mapState(["currentUser"]),
          getCurrentUser() {
            let res="";
          console.log(">>>>", this.currentUser);
            res= this.currentUser;
         this.owner= res;
          console.log("owner123",this.owner);
  }
  },
  methods:{
     addToCart(product){
             console.log("proooooooo",this.quantity, this.deliveryLocation);

             product.quantity = this.quantity;
             product.price= parseInt(this.quantity*product.price);
             product.deliveryLocation = this.deliveryLocation;
             product.owner= this.owner;
             console.log('priceeeeeeeeeeeeeeee',product.price);
          if(product.quantity==""||product.deliveryLocation==""){
            alert("please fill all the details");
          }
          else{
             return products.purchaseProducts(product);
             this.$router.push({
                  name:"home"});
          }
          }
  },

  // created() {
  //   console.log("11111111111111111111111111111111",this.product.name);
  // }
}
</script>
