<template>
  <v-card>
    <v-card-text>
      <div>
        <v-icon>mdi-home</v-icon>
        {{ site.location }}
      </div>
      <div class="title py-5">{{ site.name }}</div>
      <div>
        <div>{{ site.address.street }}</div>
        <div>{{ site.address.city }}</div>
      </div>
      <div class="py-5">
        <div>
          <v-icon small>mdi-phone</v-icon>
          <span class="pl-2">{{ site.address.phone }}</span>
        </div>
        <div>
          <v-icon small>mdi-fax</v-icon>
          <span class="pl-2">{{ site.address.fax }}</span>
        </div>
        <div>
          <v-icon small>mdi-mail</v-icon>
          <span class="pl-2">{{ site.address.email }}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Site",
  props: ["site"]
};
</script>

<style scoped></style>
