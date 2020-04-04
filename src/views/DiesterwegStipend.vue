<template>
  <div class="diesterweg-stipend">
    <banner v-bind:banner="banner"></banner>
    <service-list
      v-bind:services="dwsData"
      v-bind:service-name="'dwsData'"
      v-bind:route="'generation'"
    ></service-list>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import ServiceList from "@/components/ServiceList";
import { mapState } from "vuex";
export default {
  name: "DiesterwegStipend",
  components: {
    Banner,
    ServiceList
  },
  data: () => ({
    banner: {
      title: "Diesterweg- Stipendium",
      uri: "/assets/images/dwstipend_mobile.jpg"
    }
  }),
  mounted() {
    this.$store.dispatch("loadDwsData");
  },
  computed: {
    ...mapState(["dwsData"])
  }
};
</script>

<style scoped></style>
