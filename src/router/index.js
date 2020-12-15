import { createRouter, createWebHistory } from "vue-router";
import Locations from "../views/Locations.vue";
import About from "../views/About.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import Profile from "../views/Profile.vue";
import LocationPage from "../views/LocationPage.vue";

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/locations",
    name: "Locations",
    component: Locations,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/location-page",
    name: "LocationPage",
    component: LocationPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;