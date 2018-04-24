
import 'babel-polyfill'
import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import getters from './getters.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    //aStore:login,
    login
  },
  getters
});
//store.state.aStore;
export default store;