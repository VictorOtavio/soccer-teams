<template>
  <form>
    <h2 class="title is-3">Cadastrar Jogador</h2>

    <b-field label="Clube">
      <b-autocomplete
        icon="users"
        v-model="team"
        :data="teams"
        field="name"
        @select="option => (team_id = option !== null ? option.id : team_id)"
        placeholder="Clube de futebol"
      >
        <template slot="empty">
          Clibe não encontrado
        </template>
      </b-autocomplete>
    </b-field>

    <b-field label="Nome">
      <b-input v-model="name" placeholder="Nome do time" />
    </b-field>

    <b-field grouped>
      <div class="control">
        <button class="button is-link" @click.prevent="saveData">
          <b-icon icon="save" size="is-small" />
          <span>Salvar</span>
        </button>
      </div>
    </b-field>
  </form>
</template>

<script>
export default {
  name: "PlayerForm",

  data() {
    return {
      team: "",
      team_id: "",
      name: ""
    };
  },

  computed: {
    teams() {
      const teams = this.$store.getters["teams/fetchTeams"].filter(option => {
        return option.name.toLowerCase().indexOf(this.team.toLowerCase()) >= 0;
      });

      return teams;
    }
  },

  methods: {
    async saveData() {
      try {
        await this.$store.dispatch("players/storePlayer", this.$data);

        // Clear data
        this.team = "";
        this.team_id = "";
        this.name = "";

        this.$buefy.toast.open({
          message: "Jogador cadastrado com sucesso!",
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
