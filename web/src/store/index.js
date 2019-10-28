import Vue from "vue";
import Vuex from "vuex";
import teams from "./teams.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    teams
  }
});
