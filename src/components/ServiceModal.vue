<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar>
          <div class="container">
            <v-btn icon @click="close">
              <v-icon>mdi-chevron-double-left</v-icon>
              Zurück
            </v-btn>
          </div>
        </v-toolbar>
        <v-img :src="service.image"></v-img>
        <v-card-title v-text="service.title"></v-card-title>
        <v-card-text v-text="service.body"></v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "ServiceModal",
  data: () => ({
    dialog: true
  }),
  computed: {
    service() {
      let stateName = this.$router.currentRoute.params.serviceName;
      let services = this.$store.state[stateName].filter(service => {
        return service.id === this.$router.currentRoute.params.id;
      });
      return services[0];
    }
  },
  methods: {
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.$router.go(-1);
      }, 500);
    }
  }
};
</script>

<style scoped></style>
