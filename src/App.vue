<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <nav class="row end-xs">
      <RouterLink class="link col-xs-6 col-sm-4 col-md-2 col-lg-1" to="/"
        >Home</RouterLink
      >
      <RouterLink class="link col-xs-6 col-sm-4 col-md-2 col-lg-1" to="/about"
        >About</RouterLink
      >
      <RouterLink class="link col-xs-6 col-sm-4 col-md-2 col-lg-1" to="/people"
        >People</RouterLink
      >
      <RouterLink class="link col-xs-6 col-sm-4 col-md-2 col-lg-1" to="/films"
        >Films</RouterLink
      >
      <RouterLink class="link col-xs-6 col-sm-4 col-md-2 col-lg-1" to="/planets"
        >Planets</RouterLink
      >
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import "../src/styles/App.scss";
.header {
  margin: 20px;
}

.link {
  color: rgb(235, 217, 217);
  margin: 35px;
}

.navigation .link.router-link-exact-active {
  color: greenyellow;
}

.navigation .link.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
