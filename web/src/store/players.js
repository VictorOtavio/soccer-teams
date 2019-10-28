import axios from "./axios.js";

export default {
  namespaced: true,
  state: {
    players: []
  },
  getters: {
    fetchPlayers(state) {
      return state.players;
    }
  },
  mutations: {
    setPlayers: (state, payload) => {
      state.players = [...payload];
    }
  },
  actions: {
    async getPlayers({ commit }) {
      const players = await axios.get("players");
      commit("setPlayers", players.data);
    }
  }
};
