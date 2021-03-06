import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/stipend",
    name: "Stipend",
    component: () => import("../views/DiesterwegStipend"),
    children: [
      {
        path: "/stipend/:id",
        name: "generation",
        component: () => import("../components/ServiceModal"),
        props: true
      }
    ]
  },
  {
    path: "/sites",
    name: "Sites",
    component: () => import("../views/Sites")
  },
  {
    path: "/impress",
    name: "Impress",
    component: () => import("../views/Impress")
  },
  {
    path: "/migration",
    name: "Migrations",
    component: () => import("../views/Migration"),
    children: [
      {
        path: "/migration/:id",
        name: "migrationServiceModal",
        component: () => import("../components/ServiceModal"),
        props: true
      }
    ]
  },
  {
    path: "/education",
    name: "Education",
    component: () => import("../views/Education"),
    children: [
      {
        path: "/education/:id",
        name: "educationServiceModal",
        component: () => import("../components/ServiceModal")
      }
    ]
  },
  {
    path: "*",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
