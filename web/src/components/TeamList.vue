<template>
  <div class="columns is-multiline">
    <template v-if="teams.length > 0">
      <div v-for="(team, i) in teams" :key="i" class="column is-4">
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
import TeamItem from "@/components/TeamItem.vue";

export default {
  name: "TeamList",

  components: {
    TeamItem
  },

  mounted() {
    this.$store.dispatch("teams/getTeams");
  },

  computed: {
    teams() {
      return this.$store.getters["teams/fetchTeams"];
    }
  }
};
</script>
