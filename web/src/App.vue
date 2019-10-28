<template>
  <div id="app">
    <b-navbar type="is-dark" wrapper-class="container">
      <template slot="brand">
        <span class="navbar-item">
          Soccer Teams
        </span>
      </template>
    </b-navbar>

    <div class="container main-content">
      <teams />
    </div>
  </div>
</template>

<script>
import Teams from "@/views/Teams.vue";

export default {
  name: "App",

  components: {
    Teams
  }
};
</script>

<style lang="scss" scoped>
.main-content {
  padding: 3rem 0;
}
</style>
