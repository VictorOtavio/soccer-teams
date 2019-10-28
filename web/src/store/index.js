import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const BASE_URL = "http://127.0.0.1:8000/";

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
    setTeam: (state, team) => {
      state.teams.push(team);
    },

    setTeams: (state, payload) => {
      state.teams = [...payload];
    }
  },
  actions: {
    async getTeams({ commit }) {
      const teams = await axios.get(BASE_URL + "teams");
      commit("setTeams", teams.data);
    },

    async storeTeam({ commit }, data) {
      const { data: team } = await axios.post(BASE_URL + "teams", data);
      commit("setTeam", team);
    }
  }
});
