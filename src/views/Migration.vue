<template>
  <div class="migration">
    <banner v-bind:banner="banner"></banner>
    <div class="container">
      <service-list
        v-bind:services="migrationServices"
        v-bind:service-name="'migrationServices'"
        v-bind:route="'migrationServiceModal'"
      ></service-list>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import ServiceList from "@/components/ServiceList";
import { mapState } from "vuex";
export default {
  name: "Migration",
  components: {
    Banner,
    ServiceList
  },
  data: () => ({
    banner: {
      title: "Migration & Integration",
      uri: "/assets/images/migration_mobile.jpg"
    }
  }),
  mounted() {
    this.$store.dispatch("loadMigrationServices");
  },
  computed: {
    ...mapState(["migrationServices"])
  }
};
</script>

<style scoped></style>
