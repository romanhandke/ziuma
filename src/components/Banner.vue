<template>
  <v-row class="no-gutters">
    <v-img
      :max-height="'calc(30vh - ' + $vuetify.application.top + 'px)'"
      :src="banner.uri"
      gradient="to top right, rgba(0,0,0,.7), rgba(0,0,0,.7)"
    >
      <v-theme-provider dark>
        <v-container fill-height>
          <v-row align="center" class="white--text mx-auto" justify="center">
            <v-col class="white--text text-center" cols="12" tag="h1">
              <span
                :class="[
                  $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3'
                ]"
                class="font-weight-black text-uppercase"
              >
                {{ banner.title }}
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-img>
  </v-row>
</template>

<script>
export default {
  name: "Banner",
  props: {
    banner: Object
  }
};
</script>

<style scoped></style>
