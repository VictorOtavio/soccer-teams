<template>
  <div class="columns is-multiline">
    <template v-if="teams.length > 0">
      <div v-for="(team, i) in teams" :key="i" class="column is-3">
        <team-item :data="team" />
      </div>
    </template>
    <div v-else class="column has-text-centered">
      <b-icon icon="frown" size="is-medium" type="is-warning" /><br />
      Você ainda não possui nenhum time cadastrado.
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TeamItem from "@/components/TeamItem.vue";

export default {
  name: "TeamList",

  components: {
    TeamItem
  },

  data() {
    return {
      teams: []
    };
  },

  mounted() {
    this.fetchTeams();
  },

  methods: {
    async fetchTeams() {
      const teams = await axios.get("http://127.0.0.1:8000/teams");
      this.teams = teams.data;
    }
  }
};
</script>
