<template>
  <div class="services">
    <h2 class="display-2 font-weight-bold mt-5 mb-3 text-uppercase text-center">
      Leistungen
    </h2>

    <v-responsive class="mx-auto mb-8" width="56">
      <v-divider class="mb-1"></v-divider>

      <v-divider></v-divider>
    </v-responsive>
  </div>
</template>

<script>
export default {
  name: "Services",
  data: () => ({
    migration: [
      {
        id: 1,
        title: "Regionale Beratung",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, corporis dicta eaque eius ex illum iure magnam magni pariatur quos recusandae sapiente veniam veritatis. Aspernatur consectetur debitis delectus distinctio doloremque, hic, ipsa odit, repellat unde ut vitae voluptatibus? Accusantium aliquid cupiditate ex quaerat quam? Architecto dolorum, maiores? Nemo, odio vel."
      },
      {
        id: 2,
        title: "Migrationsberatung für Erwachsene (MBE)",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, corporis dicta eaque eius ex illum iure magnam magni pariatur quos recusandae sapiente veniam veritatis. Aspernatur consectetur debitis delectus distinctio doloremque, hic, ipsa odit, repellat unde ut vitae voluptatibus? Accusantium aliquid cupiditate ex quaerat quam? Architecto dolorum, maiores? Nemo, odio vel."
      },
      {
        id: 3,
        title: "Integrationsprojekt",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, corporis dicta eaque eius ex illum iure magnam magni pariatur quos recusandae sapiente veniam veritatis. Aspernatur consectetur debitis delectus distinctio doloremque, hic, ipsa odit, repellat unde ut vitae voluptatibus? Accusantium aliquid cupiditate ex quaerat quam? Architecto dolorum, maiores? Nemo, odio vel."
      }
    ],
    education: []
  })
};
</script>

<style scoped></style>
