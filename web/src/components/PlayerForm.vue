<template>
  <form>
    <h2 class="title is-3">Cadastrar Jogador</h2>

    <b-field label="Clube">
      <b-input v-model="team_id" placeholder="Time de futebol" />
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
      team_id: null,
      name: ""
    };
  },

  methods: {
    saveData() {}
  }
};
</script>
