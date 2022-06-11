import axios from "axios";
import { defineStore } from "pinia";

export type PlanetsData = [
  {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
  }
];

export type PlanetData = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string[];
  residents: string[];
  films: string;
  created: string;
  edited: string;
  url: string;
};

export const usePlanetsStore = defineStore("planets", {
  state: () => ({
    planets: [{}] as PlanetsData,
    planet: {} as PlanetData,
    loading: false,
  }),
  getters: {
    getPlanets(state) {
      return state.planets;
    },
    getPlanet(state) {
      return state.planet;
    },
  },
  actions: {
    async fetchPlanets() {
      this.loading = true;
      try {
        const response = await axios.get("https://swapi.dev/api/planets");
        this.planets = response.data.results;
      } catch (error) {
        alert(error);
      } finally {
        this.loading = false;
      }
    },
    async fetchPlanet(num: number) {
      this.loading = true;
      try {
        const response = await axios.get(
          `https://swapi.dev/api/planets/${num}`
        );
        this.planet = response.data;
      } catch (error) {
        alert(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
