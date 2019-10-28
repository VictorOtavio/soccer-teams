<template>
  <div>
    <h1 class="title is-2">Jogadores</h1>

    <div class="columns">
      <div class="column">
        <player-list />
      </div>
      <div class="column is-4">
        <player-form />
      </div>
    </div>
  </div>
</template>

<script>
import PlayerForm from "@/components/PlayerForm.vue";
import PlayerList from "@/components/PlayerList.vue";

export default {
  name: "Players",

  components: {
    PlayerForm,
    PlayerList
  }
};
</script>
