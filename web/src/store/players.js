import axios from "./axios.js";

export default {
  namespaced: true,

  state: {
    players: []
  },

  getters: {
    fetchPlayers(state) {
      return state.players;
    },

    fetchPlayersByTeam: state => teamId => {
      return state.players.filter(
        player => parseInt(player.team_id) === teamId
      );
    }
  },

  mutations: {
    addPlayer: (state, player) => {
      state.players.push(player);
    },

    setPlayers: (state, payload) => {
      state.players = [...payload];
    },

    removePlayer: (state, playerId) => {
      state.players = state.players.filter(x => x.id !== playerId);
    }
  },

  actions: {
    async getPlayers({ commit }) {
      const players = await axios.get("players");
      commit("setPlayers", players.data);
    },

    async storePlayer({ commit }, data) {
      const { data: player } = await axios.post("players", data);
      commit("addPlayer", player);
    },

    destroyPlayer({ commit }, playerId) {
      axios.delete("players/" + playerId);
      commit("removePlayer", playerId);
    }
  }
};
