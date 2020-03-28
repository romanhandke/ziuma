<template>
  <div class="sites">
    <banner v-bind:banner="banner"></banner>
    <div class="container">
      <v-row>
        <v-col v-for="site in sites" :key="site.name" cols="12" md="6">
          <site v-bind:site="site"></site>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Site from "@/components/Site";
import Banner from "@/components/Banner";
export default {
  name: "Sites",
  components: {
    Site,
    Banner
  },
  data: () => ({
    banner: {
      title: "Standorte",
      uri: "/assets/images/sites_mobile.jpg"
    },
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
