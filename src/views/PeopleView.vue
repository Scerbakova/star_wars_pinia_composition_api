<script setup lang="ts">
import { usePeopleStore } from "@/stores/people";
import { mapActions, mapState, storeToRefs } from "pinia";
import { onMounted, computed } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import LoaderComponent from "../components/LoaderComponent.vue";

const { loading } = storeToRefs(usePeopleStore());

const name = "";

const people = computed(() => {
  return usePeopleStore().getPeople;
});

const search = (name: string) => {
  return usePeopleStore().fetchPeopleByName(name);
};

onMounted(() => {
  usePeopleStore().fetchPeople();
});

mapState(usePeopleStore, ["people"]);
mapActions(usePeopleStore, ["fetchPeople", "fetchPeopleByName"]);
</script>

<template>
  <div class="row center-xs">
    <form class="col-xs-12" @submit.prevent="search(name), (name = '')">
      <input
        class="input"
        v-model="name"
        placeholder="enter name"
        type="text"
      />
      <button class="button">Search</button>
    </form>
  </div>
  <main class="row center-xs">
    <div v-if="loading">
      <LoaderComponent />
    </div>
    <div
      v-else
      class="card__wrapper col-xs-12 col-md-3"
      v-for="person in people"
      :key="person.name"
    >
      <div>
        <h2 class="subtitle">
          <span class="entry"> name:</span> {{ person.name }}
        </h2>
        <div>
          <span class="entry"> birth year:</span> {{ person.birth_year }}
        </div>
        <div><span class="entry"> eye color:</span> {{ person.eye_color }}</div>
        <div>
          <span class="entry"> hair color:</span> {{ person.hair_color }}
        </div>
        <div><span class="entry"> gender:</span> {{ person.gender }}</div>
        <div><span class="entry"> mass:</span> {{ person.mass }}</div>
        <div>
          <span class="entry"> skin color:</span> {{ person.skin_color }}
        </div>
      </div>
    </div>
  </main>
  <!-- <main class="row center-xs">
    <div v-if="loading">
      <LoaderComponent />
    </div>
    <div
      v-else
      class="card__wrapper col-xs-12 col-md-3"
      v-for="person in people"
      :key="person.name"
    >
      <div>
        <h2 class="subtitle">
          <span class="entry"> name:</span> {{ person.name }}
        </h2>
        <div>
          <span class="entry"> birth year:</span> {{ person.birth_year }}
        </div>
        <div><span class="entry"> eye color:</span> {{ person.eye_color }}</div>
        <div>
          <span class="entry"> hair color:</span> {{ person.hair_color }}
        </div>
        <div><span class="entry"> gender:</span> {{ person.gender }}</div>
        <div><span class="entry"> mass:</span> {{ person.mass }}</div>
        <div>
          <span class="entry"> skin color:</span> {{ person.skin_color }}
        </div>
      </div>
    </div>
  </main> -->
</template>
