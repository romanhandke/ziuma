<template>
  <div class="home">
    <hero></hero>
    <about></about>
    <services></services>
    <contact></contact>
    <scroll-to-top></scroll-to-top>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import Contact from "@/components/Contact.vue";
import ScrollToTop from "@/components/ScrollToTop";

export default {
  name: "Home",
  components: {
    Hero,
    About,
    Services,
    Contact,
    ScrollToTop
  }
};
</script>
