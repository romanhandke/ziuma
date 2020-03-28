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
      { title: "Bildung & Erziehung", icon: "mdi-briefcase", link: "/services" },
      { title: "Über Uns", icon: "mdi-information", link: "/about" },
      {
        title: "Diesterweg-Stipendium",
        icon: "mdi-book-open-variant",
        link: "/stipend"
      },
      { title: "Standorte", icon: "mdi-home-city", link: "/sites" },
      { title: "Impressum", icon: "mdi-account-box", link: "/impress" }
    ]
  })
};
</script>

<style scoped></style>
