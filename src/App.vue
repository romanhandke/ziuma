<template>
  <v-app>
    <navigation></navigation>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import AppFooter from "@/components/Footer";

export default {
  name: "App",

  components: {
    Navigation,
    AppFooter
  }
};
</script>
