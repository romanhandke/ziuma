<template>
  <nav>
    <v-app-bar app color="white">
      <v-toolbar-title>ZIUMA e.V.</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            ZIUMA e.V.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in navItems" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({
    drawer: false,
    navItems: [
      { title: "Startseite", icon: "mdi-home", link: "/" },
      { title: "Über Uns", icon: "mdi-information", link: "/about" },
      {
        title: "Migration & Integration",
        icon: "mdi-account-group",
        link: "/migration"
      },
      {
        title: "Bildung & Erziehung",
        icon: "mdi-book-open-variant",
        link: "/education"
      },
      {
        title: "Diesterweg-Stipendium",
        icon: "mdi-lead-pencil",
        link: "/stipend"
      },
      { title: "Standorte", icon: "mdi-home-city", link: "/sites" },
      { title: "Impressum", icon: "mdi-account-box", link: "/impress" }
    ]
  })
};
</script>

<style scoped></style>
