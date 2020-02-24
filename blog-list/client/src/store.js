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
  },
  mutations:{
    setCurrentUser(state,user){
      state.currentUser=user
    },

  },
  actions:{
    setCurrUser({commit},user){
      commit("setCurrentUser",user);
    }

  }

})
