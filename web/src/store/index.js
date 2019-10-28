import Vue from "vue";
import Vuex from "vuex";
import teams from "./teams.js";
import players from "./players.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    teams,
    players
  }
});
