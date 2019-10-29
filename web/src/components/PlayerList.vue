<template>
  <b-table :data="players" striped hoverable>
    <template slot-scope="props">
      <b-table-column field="name" label="Nome">
        {{ props.row.name }}
      </b-table-column>

      <b-table-column field="team_id" label="Clube">
        {{ props.row.team.name }}
      </b-table-column>

      <b-table-column class="has-text-right">
        <button
          class="button is-danger is-small"
          @click="removeItem(props.row.id)"
          title="Remover jogador"
        >
          <b-icon icon="times" size="is-small" />
        </button>
      </b-table-column>
    </template>

    <template slot="empty">
      <div class="has-text-centered">
        <b-icon icon="frown" size="is-medium" type="is-warning" /><br />
        Você ainda não possui nenhum jogador cadastrado.
      </div>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "PlayerList",

  props: {
    team: {
      type: [Number, String],
      default: null
    }
  },

  computed: {
    players() {
      if (this.team) {
        return this.$store.getters["players/fetchPlayersByTeam"](
          parseInt(this.team)
        );
      }

      return this.$store.getters["players/fetchPlayers"];
    }
  },

  methods: {
    async removeItem(playerId) {
      try {
        await this.$store.dispatch("players/destroyPlayer", playerId);

        this.$buefy.toast.open({
          message: "Jogador removido com sucesso!",
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
