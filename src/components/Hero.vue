<template>
  <section id="hero">
    <v-row class="no-gutters">
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        :max-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="../assets/images/header_mobile.jpg"
        gradient="to top right, rgba(0,0,0,.7), rgba(0,0,0,.7)"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="white--text mx-auto" justify="center">
              <v-col class="white--text text-center" cols="12" tag="h1">
                <span
                  class="font-weight-light"
                  :class="[
                    $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2'
                  ]"
                >
                  WILLKOMMEN BEI
                </span>

                <br />

                <span
                  :class="[
                    $vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4'
                  ]"
                  class="font-weight-black"
                >
                  ZIUMA e.V.
                </span>
              </v-col>

              <v-btn
                class="align-self-end"
                fab
                outlined
                @click="$vuetify.goTo('#about-us')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "Hero"
};
</script>
