<script setup lang="ts">
import { useFilmsStore } from "@/stores/films";
import { mapActions, mapState, storeToRefs } from "pinia";
import { onMounted, computed, ref } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import LoaderComponent from "../components/LoaderComponent.vue";

const order = ref("");

const ordered = () => {
  if (order.value === "ID ascending") {
    films.value.sort((a, b) => a.episode_id - b.episode_id);
  } else if (order.value === "ID descending") {
    films.value.sort((a, b) => b.episode_id - a.episode_id);
  } else if (order.value === "Date descending") {
    films.value.sort(
      (a, b) =>
        +b.release_date.split("").splice(0, 4).join("") -
        +a.release_date.split("").splice(0, 4).join("")
    );
  } else if (order.value === "Date ascending") {
    films.value.sort(
      (a, b) =>
        +a.release_date.split("").splice(0, 4).join("") -
        +b.release_date.split("").splice(0, 4).join("")
    );
  }
};

const { loading } = storeToRefs(useFilmsStore());

const films = computed(() => {
  return useFilmsStore().getFilms;
});

onMounted(() => {
  useFilmsStore().fetchFilms();
});

mapState(useFilmsStore, ["films"]);
mapActions(useFilmsStore, ["fetchFilms"]);
</script>

<template>
  <div class="row center-xs">
    <form class="col-xs-12" @submit.prevent>
      <select class="select" @change="ordered" v-model="order">
        <option disabled value="">Choose order</option>
        <option value="ID descending">ID descending order</option>
        <option value="ID ascending">ID ascending order</option>
        <option value="Date descending">Release Date descending order</option>
        <option value="Date ascending">Release Date ascending order</option>
      </select>
    </form>
  </div>
  <main class="row center-xs">
    <div v-if="loading">
      <LoaderComponent />
    </div>
    <div
      v-else
      class="card__wrapper col-xs-4"
      v-for="film in films"
      :key="film.title"
    >
      <div>
        <h2 class="subtitle">
          <span class="entry"> title:</span> {{ film.title }}
        </h2>
        <div><span class="entry"> episode:</span> {{ film.episode_id }}</div>
        <div>
          <span class="entry"> release date:</span> {{ film.release_date }}
        </div>
        <div><span class="entry"> url:</span> {{ film.url }}</div>
        <div><span class="entry"> producers:</span> {{ film.producer }}</div>
        <div><span class="entry"> director:</span> {{ film.director }}</div>
        <div>
          <span class="entry"> opening crawl:</span> {{ film.opening_crawl }}
        </div>
      </div>
    </div>
  </main>
</template>
