<template>
  <div>
    <h1 class="title is-2">Cadastrar Time de Futebol</h1>
    <team-form />
  </div>
</template>

<script>
import TeamForm from "@/components/TeamForm.vue";

export default {
  name: "NewTeam",

  components: {
    TeamForm
  }
};
</script>
