<template>
  <form>
    <b-field label="Nome">
      <b-input placeholder="Nome do time" />
    </b-field>

    <b-field label="Técnico">
      <b-input placeholder="Técnico do time" />
    </b-field>

    <b-field grouped>
      <div class="control">
        <button class="button is-link">
          <b-icon icon="save" size="is-small" />
          <span>Salvar</span>
        </button>
      </div>
    </b-field>
  </form>
</template>

<script>
export default {
  name: "TeamForm"
};
</script>
