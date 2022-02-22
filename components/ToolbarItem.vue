<template>
  <v-app-bar fixed  dark>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click.stop="toggleDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="pl-0">
      <nuxt-link class="nav-item" to="/">
        <img src="@/assets/img/logo.jpeg" style="width: 70; height: 70px"
      /></nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-list-item
        v-for="item in links"
        :key="item.text"
        color="primary"
        router
        :to="item.route"
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-toolbar-items>

    <!-- <LanguageSwitcher /> -->
  </v-app-bar>
</template>
<script>
export default {

  data() {
    return {
      links: [
        { text: this.$t("home"), route: "/" },
        { text: this.$t("achievement"), route: "/realisations" },
        { text: this.$t("devis"), route: "/devis" },
        { text: this.$t("contact"), route: "/contact" },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
  },
};
</script>
