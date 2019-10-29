import axios from "./axios.js";

export default {
  namespaced: true,

  state: {
    teams: []
  },

  getters: {
    fetchTeams(state) {
      return state.teams;
    },

    showTeam(state) {
      return teamId => state.teams.find(x => x.id === teamId);
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
    async getTeam({ commit }, teamId) {
      const team = await axios.get("teams/" + teamId);
      commit("addTeam", team.data);
    },

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
};
