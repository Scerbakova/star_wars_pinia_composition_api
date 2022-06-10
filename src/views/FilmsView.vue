<script setup lang="ts">
import { useFilmsStore } from "@/stores/films";
import { mapActions, mapState } from "pinia";
import { onMounted, computed } from "vue";

// const name = "";

const films = computed(() => {
  return useFilmsStore().getFilms;
});

// const search = (name: string) => {
//   return useFilmsStore().fetchPeopleByName(name);
// };

onMounted(() => {
  useFilmsStore().fetchFilms();
});

mapState(useFilmsStore, ["films"]);
mapActions(useFilmsStore, ["fetchFilms"]);
</script>

<template>
  <!-- <div class="row">
    <form class="col-xs-12" @submit.prevent="search(name), (name = '')">
      <input v-model="name" placeholder="enter name" type="text" />
      <button>Search</button>
    </form>
  </div> -->
  <main class="row center-xs">
    <div class="card__wrapper col-xs-4" v-for="film in films" :key="film.title">
      <div>
        <h2 class="title">title: {{ film.title }}</h2>
        <div>episode: {{ film.episode_id }}</div>
        <div>created: {{ film.created }}</div>
        <div>url: {{ film.url }}</div>
      </div>
    </div>
  </main>
</template>
