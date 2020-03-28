<template>
  <section id="about-us">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">ÜBER UNS</h2>

      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        Wir wissen, dass es jedem Menschen zusteht, seine Potenziale und Leidenschaften zum Wohle der Gemeinschaft zu entwickeln. Weder soziale Benachteiligung noch Zuwanderungsgeschichte dürfen dem entgegenstehen. Zu einem friedlichen und glücklichen Zusammenleben bedarf es der gleichwürdigen Teilnahme, Teilhabe und Partizipation am gesellschaftlichen Leben im Sinne sozialer Inklusion und diversitätsgerechter Bildungschancen.
      </v-responsive>

      <v-avatar
        class="elevation-12 mb-12"
        size="128"
      >
        <v-img src="assets/images/portrait.jpg"></v-img>
      </v-avatar>

      <div></div>

      <v-btn
        color="grey"
        href="https://vuetifyjs.com"
        outlined
        large
      >
        <span class="grey--text text--darken-1 font-weight-bold">
          Mehr über uns erfahren
        </span>
      </v-btn>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>
