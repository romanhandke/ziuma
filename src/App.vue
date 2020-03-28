<template>
  <v-app>
    <navigation></navigation>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer class="justify-center" color="#292929" height="100">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} — ZIUMA e.V. — Made by Roman
        Handke
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",

  components: {
    Navigation
  }
};
</script>
