<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <div class="row end-xs">
      <nav class="navigation col-xs-12">
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/about">About</RouterLink>
        <RouterLink class="link" to="/people">People</RouterLink>
        <RouterLink class="link" to="/films">Films</RouterLink>
        <RouterLink class="link" to="/planets">Planets</RouterLink>
      </nav>
    </div>
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
  margin-right: 20px;
}

.navigation .link.router-link-exact-active {
  color: greenyellow;
}

.navigation .link.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
