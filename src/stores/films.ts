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
    loading: false,
  }),
  getters: {
    getFilms(state) {
      return state.films;
    },
  },
  actions: {
    async fetchFilms() {
      this.loading = true;
      try {
        const response = await axios.get("https://swapi.dev/api/films");
        this.films = response.data.results.sort(
          (a: { episode_id: number }, b: { episode_id: number }) =>
            b.episode_id - a.episode_id
        );
      } catch (error) {
        alert(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
