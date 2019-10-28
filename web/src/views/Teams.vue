<template>
  <div>
    <h1 class="title is-2">Times de Futebol</h1>
    <div class="columns">
      <div class="column is-3">
        <team />
      </div>
    </div>
  </div>
</template>

<script>
import Team from "@/components/Team.vue";

export default {
  name: "Teams",

  components: {
    Team
  }
};
</script>
