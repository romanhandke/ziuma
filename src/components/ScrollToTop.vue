<template>
  <v-fab-transition>
    <v-btn
      color="primary"
      large
      fab
      dark
      fixed
      bottom
      right
      v-scroll="onScroll"
      v-show="fab"
      @click="scrollToTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
import goTo from "vuetify/lib/services/goto";
export default {
  name: "ScrollToTop",
  data: () => ({
    fab: false
  }),
  methods: {
    scrollToTop() {
      goTo(0);
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      const vh = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      this.fab = top > vh / 2;
    }
  }
};
</script>

<style scoped></style>
