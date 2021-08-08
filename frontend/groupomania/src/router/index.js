import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import("../views/Signup.vue"),
  },
  {
    path: "/homepage",
    name: "Homepage",
    component: () =>
      import("../views/Homepage.vue"),
  },
  {
    path: "/message",
    name: "ReadMessage",
    component: () =>
      import("../views/ReadMessage.vue"),
  },
  {
    path: "/new",
    name: "NewMessage",
    component: () =>
      import("../views/NewMessage.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import("../views/Profile.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
