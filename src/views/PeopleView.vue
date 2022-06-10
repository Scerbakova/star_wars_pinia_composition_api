<script setup lang="ts">
import { usePeopleStore } from "@/stores/people";
import { mapActions, mapState } from "pinia";
import { onMounted, computed } from "vue";

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
  <div class="row">
    <form class="col-xs-12" @submit.prevent="search(name), (name = '')">
      <input v-model="name" placeholder="enter name" type="text" />
      <button>Search</button>
    </form>
  </div>
  <main class="row">
    <div class="col-xs-4" v-for="person in people" :key="person.name">
      <div>
        <h2>name: {{ person.name }}</h2>
        <div>birth year: {{ person.birth_year }}</div>
        <div>eye color: {{ person.eye_color }}</div>
        <div>hair color: {{ person.hair_color }}</div>
      </div>
    </div>
  </main>
</template>
