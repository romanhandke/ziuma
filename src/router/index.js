import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/stipend",
    name: "Stipend",
    component: () => import("../views/DiesterwegStipend")
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
    path: "/services",
    name: "Services",
    component: () => import("../views/Services")
  },
  {
    path: "/migration",
    name: "Migrations",
    component: () => import("../views/Migration"),
    children: [
      {
        path: "/migration/:id",
        name: "serviceModal",
        component: () => import("../components/ServiceModal")
      }
    ]
  },
  {
    path: "/education",
    name: "Education",
    component: () => import("../views/Education")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
