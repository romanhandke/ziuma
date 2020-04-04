<template>
  <div class="sites">
    <banner v-bind:banner="banner"></banner>
    <div class="container">
      <v-row>
        <v-col v-for="site in sites" :key="site.name" cols="12" md="6">
          <site v-bind:site="site"></site>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Site from "@/components/Site";
import Banner from "@/components/Banner";
import { mapState } from "vuex";
export default {
  name: "Sites",
  components: {
    Site,
    Banner
  },
  data: () => ({
    banner: {
      title: "Standorte",
      uri: "/assets/images/sites_mobile.jpg"
    }
  }),
  mounted() {
    this.$store.dispatch("loadSites");
  },
  computed: {
    ...mapState(["sites"])
  }
};
</script>

<style scoped></style>
