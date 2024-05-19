import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Contacts from "../views/ContactsView.vue";
import Asphalt from "../views/AsphaltView.vue";
import About from "../views/AboutView.vue";
import Decking from "../views/DeckingView.vue";
import Fencing from "../views/FencingView.vue";
import Interlock from "../views/InterlockView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/interlock",
      name: "interlock",
      component: Interlock,
    },
    {
      path: "/fencing",
      name: "fencing",
      component: Fencing,
    },
    {
      path: "/decking",
      name: "decking",
      component: Decking,
    },
    {
      path: "/asphalt",
      name: "asphalt",
      component: Asphalt,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
  ],
});

export default router;
