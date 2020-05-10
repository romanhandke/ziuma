<template>
  <div class="container">
    <v-card class="mx-auto ">
      <v-list>
        <v-subheader v-if="subheader" class="text-uppercase">
          {{ subheader }}
        </v-subheader>
        <v-list-item-group>
          <v-list-item
            v-for="service in services"
            :key="service.id"
            @click="
              $router.push({
                name: route,
                params: {
                  id: service.id,
                  serviceName: serviceName
                }
              })
            "
          >
            <v-list-item-avatar>
              <v-img :src="service.image"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="service.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ServiceList",
  props: {
    subheader: String,
    serviceName: String,
    services: Array,
    route: String
  },
  data: () => ({
    dialog: false
  })
};
</script>

<style scoped></style>
