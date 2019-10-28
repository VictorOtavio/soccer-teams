<template>
  <form>
    <h2 class="title is-3">Cadastrar Time de Futebol</h2>

    <b-field label="Nome">
      <b-input v-model="name" placeholder="Nome do time" />
    </b-field>

    <b-field label="Técnico">
      <b-input v-model="coach" placeholder="Técnico do time" />
    </b-field>

    <b-field class="file">
      <b-upload v-model="logo" accept="image/*">
        <a class="button is-info">
          <b-icon icon="upload" size="is-small" />
          <span>Logotipo do time</span>
        </a>
      </b-upload>
      <span class="file-name" v-if="logo">
        {{ logo.name }}
      </span>
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
  name: "TeamForm",

  data() {
    return {
      name: "",
      coach: "",
      logo: null
    };
  },

  methods: {
    async saveData() {
      try {
        await this.$store.dispatch("teams/storeTeam", this.$data);

        // Clear data
        this.name = "";
        this.coach = "";
        this.logo = null;

        this.$buefy.toast.open({
          message: "Time de futebol cadastrado com sucesso!",
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
