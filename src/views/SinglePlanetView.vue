<script setup lang="ts">
import { usePlanetsStore } from "@/stores/planets";
import { mapActions, mapState, storeToRefs } from "pinia";
import { onMounted, computed, watch, ref } from "vue";
import { useRoute } from "vue-router";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import LoaderComponent from "../components/LoaderComponent.vue";

const route = useRoute();

const { loading } = storeToRefs(usePlanetsStore());

const planet = computed(() => {
  return usePlanetsStore().getPlanet;
});

const num = Number(route.params.num);

onMounted(() => usePlanetsStore().fetchPlanet(num));

mapState(usePlanetsStore, ["planet"]);
mapActions(usePlanetsStore, ["fetchPlanet"]);

let image = ref(false);
const setImage = () => {
  image.value = true;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
watch(image, (newImage: boolean, oldImage: boolean) => {
  return newImage;
});

const size = (Number(planet.value.diameter) * 0.1) / 2;
const planetSize = computed(() => {
  if (size > 500) {
    return 500;
  } else {
    return size;
  }
});

const color = computed(() => {
  if (+planet.value.surface_water === 0) {
    return "red";
  } else if (+planet.value.surface_water <= 20) {
    return "saddlebrown";
  } else if (+planet.value.surface_water <= 40) {
    return "cadetblue";
  } else if (+planet.value.surface_water <= 60) {
    return "aquamarine";
  } else if (+planet.value.surface_water <= 80) {
    return "aqua";
  } else {
    return "blue";
  }
});
const populationAmount = Math.round(Number(planet.value.population) * 0.0001);
const population = computed(() => {
  if (populationAmount > 50) {
    return 50;
  } else if (populationAmount === 0) {
    return 1;
  } else {
    return populationAmount;
  }
});
const climate = planet.value.climate;
const climateChange = computed(() => {
  if (climate === "arid") {
    return "yellow";
  } else if (climate === "temperate") {
    return "green";
  } else if (climate === "frozen") {
    return "cornflowerblue";
  } else if (climate === "murky") {
    return "grey";
  } else {
    return "violet";
  }
});
</script>

<template>
  <div>
    <div class="row center-xs">
      <button class="button col-xs-2" @click="$router.push('/')">
        Back To Earth
      </button>
      <button class="button col-xs-2" @click="$router.push('/planets')">
        All Planets
      </button>
    </div>
    <main class="row center-xs">
      <div v-if="loading">
        <LoaderComponent />
      </div>
      <div v-else class="card__wrapper col-xs-6">
        <div>
          <h2 class="subtitle">
            <span class="entry">name:</span> {{ planet.name }}
          </h2>
          <div><span class="entry">climate:</span> {{ planet.climate }}</div>
          <div><span class="entry">diameter:</span> {{ planet.diameter }}</div>
          <div><span class="entry">gravity:</span> {{ planet.gravity }}</div>
          <div><span class="entry">terrain:</span> {{ planet.terrain }}</div>
          <div>
            <span class="entry">surface water:</span> {{ planet.surface_water }}
          </div>
          <div>
            <span class="entry">rotaion period:</span>
            {{ planet.rotation_period }}
          </div>
          <div>
            <span class="entry">population:</span> {{ planet.population }}
          </div>
          <div>
            <span class="entry">orbital_period:</span>
            {{ planet.orbital_period }}
          </div>
          <button class="button" @click="setImage">View Image</button>
          <div class="row center-xs">
            <div
              :style="{
                width: planetSize + 'px',
                height: planetSize + 'px',
                backgroundColor: color,
                border: population + 'px',
                borderStyle: 'dotted',
                borderColor: 'black',
                borderRadius: 50 + '%',
              }"
              class="image"
              v-if="image"
            >
              <div
                :style="{
                  backgroundColor: climateChange,
                }"
                class="climate"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import "@/styles/Planet.scss";
</style>
