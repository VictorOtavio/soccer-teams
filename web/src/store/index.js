import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const axios = Axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

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
    addTeam: (state, team) => {
      state.teams.push(team);
    },

    setTeams: (state, payload) => {
      state.teams = [...payload];
    },

    removeTeam: (state, teamId) => {
      state.teams = state.teams.filter(x => x.id !== teamId);
    }
  },
  actions: {
    async getTeams({ commit }) {
      const teams = await axios.get("teams");
      commit("setTeams", teams.data);
    },

    async storeTeam({ commit }, data) {
      const { data: team } = await axios.post("teams", data);

      if (data.logo) {
        const fileUpload = new FormData();
        fileUpload.append("logo", data.logo);

        const { data: logo } = await axios.post(
          "teams/" + team.id + "/logo",
          fileUpload,
          {
            headers: { "Content-Type": "multipart/form-data" }
          }
        );

        team.logo = logo.url;
      }

      commit("addTeam", team);
    },

    destroyTeam({ commit }, teamId) {
      axios.delete("teams/" + teamId);
      commit("removeTeam", teamId);
    }
  }
});
