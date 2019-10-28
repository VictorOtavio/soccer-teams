<template>
  <div id="app">
    <b-navbar type="is-dark" wrapper-class="container">
      <template slot="brand">
        <span class="navbar-item">
          Soccer Teams
        </span>
      </template>

      <template slot="end">
        <router-link class="navbar-item" :to="{ name: 'teams' }">
          Clubes
        </router-link>
        <router-link class="navbar-item" :to="{ name: 'players' }">
          Jogadores
        </router-link>
      </template>
    </b-navbar>

    <div class="container main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
.main-content {
  padding: 3rem 0;
}
</style>
