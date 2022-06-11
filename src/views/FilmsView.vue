<script setup lang="ts">
import { useFilmsStore } from "@/stores/films";
import { mapActions, mapState, storeToRefs } from "pinia";
import { onMounted, computed, ref } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import LoaderComponent from "../components/LoaderComponent.vue";

const order = ref("");

// const ordered = watch(
//   () => order,
//   (newOrder, oldOrder) => {
//     if (newOrder.value === "ID") {
//       films.value.sort((a, b) => a.episode_id - b.episode_id);
//     } else if (newOrder.value === "Release Date") {
//       useFilmsStore().fetchFilms();
//     }
//   }
// );

const ordered = () => {
  if (order.value === "ID") {
    films.value.sort((a, b) => a.episode_id - b.episode_id);
  } else if (order.value === "Release Date") {
    useFilmsStore().fetchFilms();
  }
};

// const name = "";

const { loading } = storeToRefs(useFilmsStore());

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
  <div class="row">
    <form class="col-xs-12" @submit.prevent>
      <select @change="ordered" class="select" v-model="order">
        <option disabled value="">Choose order</option>
        <option value="ID">ID</option>
        <option value="Release Date">Release Date</option>
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
        <h2 class="title">
          <span class="entry"> title:</span> {{ film.title }}
        </h2>
        <div><span class="entry"> episode:</span> {{ film.episode_id }}</div>
        <div>
          <span class="entry"> release date:</span> {{ film.release_date }}
        </div>
        <div><span class="entry"> url:</span> {{ film.url }}</div>
      </div>
    </div>
  </main>
</template>
