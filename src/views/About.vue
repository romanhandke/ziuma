<template>
  <div class="about">
    <banner v-bind:banner="banner"></banner>
    <div class="container">
      <v-expansion-panels hover class="py-6">
        <v-expansion-panel
          v-for="description in descriptions"
          :key="description.id"
        >
          <v-expansion-panel-header>{{
            description.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ description.body }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  name: "About",
  components: {
    Banner
  },
  data: () => ({
    banner: {
      title: "Über Uns",
      uri: "/assets/images/about_mobile.jpg"
    },
    descriptions: [
      {
        id: 1,
        title: "Verein",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci beatae cum dignissimos et fuga, in ipsum iusto libero maxime omnis optio praesentium quam quos totam, voluptate voluptates! A, voluptatibus?"
      },
      {
        id: 2,
        title: "Leitbild",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci beatae cum dignissimos et fuga, in ipsum iusto libero maxime omnis optio praesentium quam quos totam, voluptate voluptates! A, voluptatibus?"
      },
      {
        id: 3,
        title: "Migration & Integration",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci beatae cum dignissimos et fuga, in ipsum iusto libero maxime omnis optio praesentium quam quos totam, voluptate voluptates! A, voluptatibus?"
      },
      {
        id: 4,
        title: "Bildung & Erziehung",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci beatae cum dignissimos et fuga, in ipsum iusto libero maxime omnis optio praesentium quam quos totam, voluptate voluptates! A, voluptatibus?"
      }
    ]
  })
};
</script>

<style scoped></style>
