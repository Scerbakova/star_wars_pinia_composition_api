import axios from "axios";
import { defineStore } from "pinia";

export type PeopleData = [
  {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  }
];

export const usePeopleStore = defineStore("people", {
  state: () => ({
    people: [{}] as PeopleData,
  }),
  getters: {
    getPeople(state) {
      return state.people;
    },
  },
  actions: {
    async fetchPeople() {
      try {
        const response = await axios.get("https://swapi.dev/api/people");
        this.people = response.data.results;
        console.log(this.people);
      } catch (error) {
        alert(error);
      }
    },
    async fetchPeopleByName(name: string) {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/?search=${name}`
        );
        this.people = response.data.results;
        console.log(this.people);
      } catch (error) {
        alert(error);
      }
    },
  },
});
