<template>
  <v-app>
    <v-app-bar app color="white">
      <v-toolbar-title>ZIUMA e.V.</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
