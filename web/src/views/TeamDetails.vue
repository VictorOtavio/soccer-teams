<template>
  <div>
    <img
      v-if="team.logo"
      :src="team.logo"
      :alt="team.name"
      class="is-pulled-right"
    />
    <h1 class="title is-2">{{ team.name }}</h1>
    <h2 class="subtitle is-5">
      <em>Técnico:</em> <strong>{{ team.coach }}</strong>
    </h2>
    <section class="section">
      <h2 class="title is-3">Jogadores</h2>
      <player-list :team="team.id" />
    </section>
  </div>
</template>

<script>
import PlayerList from "@/components/PlayerList.vue";

export default {
  name: "TeamDetails",

  components: {
    PlayerList
  },

  data() {
    return {
      team: {
        name: "",
        coach: ""
      },
      players: []
    };
  },

  mounted() {
    const teamId = parseInt(this.$route.params.teamId);
    this.$store.dispatch("teams/getTeam", teamId).then(() => {
      this.team = this.$store.getters["teams/showTeam"](teamId);
      this.players = this.team.players;
    });
  }
};
</script>
