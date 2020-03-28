<template>
  <div class="education">
    <banner v-bind:banner="banner"></banner>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  name: "Education",
  components: {
    Banner
  },
  data: () => ({
    banner: {
      title: "Bildung & Erziehung",
      uri: "/assets/images/education_mobile.jpg"
    }
  })
};
</script>

<style scoped></style>
