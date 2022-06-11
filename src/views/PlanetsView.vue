<script setup lang="ts">
import { usePlanetsStore } from "@/stores/planets";
import { mapActions, mapState, storeToRefs } from "pinia";
import { onMounted, computed } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import LoaderComponent from "../components/LoaderComponent.vue";

const { loading } = storeToRefs(usePlanetsStore());

const planets = computed(() => {
  return usePlanetsStore().getPlanets;
});

onMounted(() => {
  usePlanetsStore().fetchPlanets();
});

mapState(usePlanetsStore, ["planets"]);
mapActions(usePlanetsStore, ["fetchPlanets"]);
</script>

<template>
  <main class="row center-xs">
    <div v-if="loading">
      <LoaderComponent />
    </div>
    <div
      v-else
      class="card__wrapper col-xs-12 col-md-3"
      v-for="planet in planets"
      :key="planet.name"
    >
      <div>
        <h2 class="subtitle">
          <span class="entry"> name:</span> {{ planet.name }}
        </h2>
        <div>
          <span class="entry"> rotation period:</span>
          {{ planet.rotation_period }}
        </div>
        <div><span class="entry"> climate:</span> {{ planet.climate }}</div>
        <div><span class="entry"> gravity:</span> {{ planet.gravity }}</div>
        <div>
          <button
            class="button"
            @click="$router.push(`/planets/${planet.url.match(/\d+/)}`)"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
