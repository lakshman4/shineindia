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
    authenticated:false,
    products:"",
  },
  mutations:{
    setToken(state,status){
      state.authenticated=status
    },
    setTotalProducts(state,products){
      state.products=products
    }

  },
  actions:{
    setCurrToken({commit},status){
      commit("setToken",status);
    },
    setProducts({commit},products){
      commit("setTotalProducts",products);
    }
  }

})
