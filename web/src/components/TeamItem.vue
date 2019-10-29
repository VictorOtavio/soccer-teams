<template>
  <div class="card" :ref="'team_' + data.id">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="data.logo ? data.logo : '//via.placeholder.com/280x210'"
          :alt="data.name"
        />
      </figure>
    </div>
    <div class="card-content">
      <h1 class="title is-4">
        <router-link
          :to="{ name: 'teams-details', params: { teamId: data.id } }"
        >
          {{ data.name }}
        </router-link>
      </h1>
      <h2 class="subtitle is-5">{{ data.coach }}</h2>
    </div>
    <footer class="card-footer">
      <a
        href="#"
        class="card-footer-item has-text-danger"
        @click.prevent="removeItem(data.id)"
      >
        Remover
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TeamItem",

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  methods: {
    async removeItem(teamId) {
      try {
        await this.$store.dispatch("teams/destroyTeam", teamId);

        this.$buefy.toast.open({
          message: "Time de futebol removido com sucesso!",
          type: "is-success"
        });
      } catch (error) {
        this.$buefy.toast.open({
          message: "Ocorreu um erro",
          type: "is-danger"
        });
        console.error(error);
      }
    }
  }
};
</script>
