import axios from "axios";
import { defineStore } from "pinia";

export type FilmsData = [
  {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
  }
];

export const useFilmsStore = defineStore("films", {
  state: () => ({
    films: [{}] as FilmsData,
  }),
  getters: {
    getFilms(state) {
      return state.films;
    },
  },
  actions: {
    async fetchFilms() {
      try {
        const response = await axios.get("https://swapi.dev/api/films");
        this.films = response.data.results;
        console.log(this.films);
      } catch (error) {
        alert(error);
      }
    },
    // async fetchPeopleByName(name: string) {
    //   try {
    //     const response = await axios.get(
    //       `https://swapi.dev/api/people/?search=${name}`
    //     );
    //     this.people = response.data.results;
    //     console.log(this.people);
    //   } catch (error) {
    //     alert(error);
    //   }
    // },
  },
});
