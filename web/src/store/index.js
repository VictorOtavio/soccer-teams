import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teams: []
  },
  getters: {
    fetchTeams(state) {
      return state.teams;
    }
  },
  mutations: {
    setTeams: (state, payload) => {
      state.teams = [...payload];
    }
  },
  actions: {
    async getTeams({ commit }) {
      const teams = await axios.get("http://127.0.0.1:8000/teams");
      commit("setTeams", teams.data);
    }
  }
});
