<template>
  <div>
    <h1 class="title is-2">Times de Futebol</h1>

    <div class="columns">
      <div class="column">
        <team-list />
      </div>
      <div class="column is-4">
        <team-form />
      </div>
    </div>
  </div>
</template>

<script>
import TeamForm from "@/components/TeamForm.vue";
import TeamList from "@/components/TeamList.vue";

export default {
  name: "Teams",

  components: {
    TeamForm,
    TeamList
  }
};
</script>
