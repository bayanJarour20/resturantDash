import Vue from "vue";
import Vuex from "vuex";
import AppStore from "./app";
import settings from "./setting"
import resterants from "./resterants";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AppStore,
    settings,
    resterants
  },
});
