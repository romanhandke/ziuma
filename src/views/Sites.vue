<template>
  <div class="container">
    <h2 class="display-2 font-weight-bold mt-5 mb-3 text-uppercase text-center">Standorte</h2>

    <v-responsive class="mx-auto mb-8" width="56">
      <v-divider class="mb-1"></v-divider>

      <v-divider></v-divider>
    </v-responsive>
    <v-row>
      <v-col
        v-for="site in sites"
        :key="site.name"
        cols="12"
        md="6"
      >
        <site v-bind:site="site"></site>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Site from "@/components/Site";
export default {
  name: "Sites",
  components: {
    Site
  },
  data: () => ({
    sites: [
      {
        location: "Standort Mitte",
        name: "Beratungsstelle für Migration, Bildung und Erziehung",
        address: {
          street: "Musfeldstraße 161-163",
          city: "47053 Duisburg - Hochfeld",
          phone: "0203 72836635",
          fax: "0203 72836641",
          email: "info@ziuma.de"
        }
      },
      {
        location: "Standort Mitte",
        name: "Sozialpädagogisch Betreutes Wohnen (SBW)",
        address: {
          street: "Musfeldstraße 161-163",
          city: "47053 Duisburg - Hochfeld",
          phone: "0203 60799315",
          fax: "0203 60799316",
          email: "sbw@ziuma.de"
        }
      }
    ]
  })
};
</script>

<style scoped></style>
