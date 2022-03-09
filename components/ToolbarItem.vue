<template>
  <v-container>
    <v-app-bar fixed dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="toggleDrawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-0">
        <nuxt-link class="nav-item" to="/">
          <img src="@/assets/logosWix.png" style="width: 70; height: 65px"
        /></nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-list-item
          v-for="item in links"
          :key="item.text"
          :to="item.route"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-toolbar-items>

      <!-- <LanguageSwitcher /> -->
    </v-app-bar>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { text: this.$t('home'), route: '/' },
        { text: this.$t('achievement'), route: '/achievements' },
        { text: this.$t('devis'), route: '/quote' },
        { text: this.$t('contact'), route: '/contact' },
      ],
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    },
  },
}
</script>
