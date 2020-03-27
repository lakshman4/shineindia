import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);
const vuexPersist = new VuexPersistence({
  key: "my-data",
  storage: localStorage,
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],

  state:{
    currentUser:"",
    products:"",
  },
  mutations:{
    setCurrentUser(state,user){
      state.currentUser=user
    },
    setTotalProducts(state,products){
      state.products=products
    }

  },
  actions:{
    setCurrUser({commit},user){
      commit("setCurrentUser",user);
    },
    setProducts({commit},products){
      commit("setTotalProducts",products);
    }
  }

})
