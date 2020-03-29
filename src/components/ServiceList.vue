<template>
  <div class="container">
    <v-card max-width="500" class="mx-auto">
      <v-list>
        <v-subheader class="text-uppercase">Handlungsfelder</v-subheader>
        <v-list-item-group>
          <v-list-item
            v-for="service in services"
            :key="service.id"
            @click="
              $router.push({ name: 'serviceModal', params: { id: service.id } })
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
    services: Array
  },
  data: () => ({
    dialog: false
  })
};
</script>

<style scoped></style>
