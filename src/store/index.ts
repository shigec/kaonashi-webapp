import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations/index';
import state from './state/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
});

export default store;
