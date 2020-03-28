<template>
  <div class="impressum">
    <banner v-bind:banner="banner"></banner>
    <section id="impress" class="container">
      <p>
        <span>{{ address.name }}</span>
        <br />
        <span>{{ address.street }}</span>
        <br />
        <span>{{ address.city }}</span>
      </p>
      <div class="py-6">
        <div>
          <v-icon small>mdi-phone</v-icon>
          <span class="pl-1">{{ phone }}</span>
        </div>
        <div>
          <v-icon small>mdi-fax</v-icon>
          <span class="pl-1">{{ fax }}</span>
        </div>
        <div>
          <v-icon small>mdi-mail</v-icon>
          <span class="pl-1">{{ email }}</span>
        </div>
      </div>
      <div class="py-6">
        <h4>Registerangaben</h4>
        <span>Amtsgericht Duisburg</span>
        <br />
        <span>Registernummer VR 4811</span>
      </div>
      <div class="py-6">
        <h4>Vorstand</h4>
        <ul>
          <li v-for="chairman in board" :key="chairman.name">
            <span>{{ chairman.name }}, {{ chairman.degree }}</span>
          </li>
        </ul>
      </div>
      <div class="py-6">
        <h4>{{ disclaimer.title }}</h4>
        <p>{{ disclaimer.content }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
export default {
  name: "Impress",
  components: {
    Banner
  },
  data: () => ({
    banner: {
      title: 'Impressum',
      uri: '/assets/images/impressum_mobile.jpg'
    },
    address: {
      name: "Zentrum für Integrations- und Migrationsarbeit (ZIUMA) e.V.",
      street: "Falkstraße 73-77",
      city: "47058 Duisburg"
    },
    phone: "0203 54527654",
    fax: "0203 54527648",
    email: "info@ziuma.de",
    board: [
      {
        name: "Leyla Altekin",
        degree: "M.A."
      },
      {
        name: "Ipek Gedik",
        degree: "dipl. soz.-wiss."
      },
      {
        name: "Tatjana Jakubowski",
        degree: "k.f.Bk."
      }
    ],
    disclaimer: {
      title: "Haftungsausschluss",
      content:
        "Trotz sorgfältiger Prüfung können wir keine Haftung für die Inhalte externer Links übernehmen. Für den Inhalt diese Seiten sind ausschließlich deren Betreiber verantwortlich."
    }
  })
};
</script>

<style scoped></style>
