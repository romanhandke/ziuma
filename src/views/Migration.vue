<template>
  <div class="migration">
    <banner v-bind:banner="banner"></banner>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  name: "Migration",
  components: {
    Banner
  },
  data: () => ({
    banner: {
      title: "Migration & Integration",
      uri: "/assets/images/migration_mobile.jpg"
    }
  })
};
</script>

<style scoped></style>
