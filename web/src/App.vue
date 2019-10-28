<template>
  <div id="app">
    <b-navbar type="is-dark" wrapper-class="container">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Soccer Teams
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <router-link :to="{ name: 'new-team' }" class="button is-primary">
              <strong>Adicionar novo time</strong>
            </router-link>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="container main-content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  padding: 3rem 0;
}
</style>
