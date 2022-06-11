import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/people",
      name: "people",
      component: () => import("../views/PeopleView.vue"),
    },
    {
      path: "/films",
      name: "films",
      component: () => import("../views/FilmsView.vue"),
    },
    {
      path: "/planets",
      name: "planets",
      component: () => import("../views/PlanetsView.vue"),
    },
    {
      path: "/planets/:num",
      name: "planet",
      component: () => import("../views/SinglePlanetView.vue"),
    },
  ],
});

export default router;
