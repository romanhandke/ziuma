<template>
  <div class="education">
    <banner v-bind:banner="banner"></banner>
    <div class="container">
      <service-list
        subheader="Handlungsfelder"
        v-bind:services="educationServices"
        v-bind:service-name="'educationServices'"
        v-bind:route="'educationServiceModal'"
      ></service-list>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import ServiceList from "@/components/ServiceList";
import { mapState } from "vuex";
export default {
  name: "Education",
  components: {
    Banner,
    ServiceList
  },
  data: () => ({
    banner: {
      title: "Bildung & Erziehung",
      uri: "/assets/images/education_mobile.jpg"
    }
  }),
  mounted() {
    this.$store.dispatch("loadEducationServices");
  },
  computed: {
    ...mapState(["educationServices"])
  }
};
</script>

<style scoped></style>
