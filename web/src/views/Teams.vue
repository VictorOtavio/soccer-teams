<template>
  <div>
    <h1 class="title is-2">Times de Futebol</h1>
    <team-list />
  </div>
</template>

<script>
import TeamList from "@/components/TeamList.vue";

export default {
  name: "Teams",

  components: {
    TeamList
  }
};
</script>
