<template>
  <div class="about">
    <banner v-bind:banner="banner"></banner>
    <div class="container">
      <v-expansion-panels hover class="py-6">
        <v-expansion-panel
          v-for="description in aboutData"
          :key="description.id"
        >
          <v-expansion-panel-header>{{
            description.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ description.body }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import { mapState } from "vuex";
export default {
  name: "About",
  components: {
    Banner
  },
  data: () => ({
    banner: {
      title: "Über Uns",
      uri: "/assets/images/about_mobile.jpg"
    }
  }),
  mounted() {
    this.$store.dispatch("loadAboutData");
  },
  computed: {
    ...mapState(["aboutData"])
  }
};
</script>

<style scoped></style>
