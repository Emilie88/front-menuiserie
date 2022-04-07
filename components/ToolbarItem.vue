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
      <v-toolbar-items class="hidden-sm-and-down" >
        <v-list-item v-for="item in links" :key="item.text">
          <NuxtLink :to="localePath(item.route)"
            ><v-list-item-title color="secondary">{{
              $t(item.text)
            }}</v-list-item-title></NuxtLink
          >
        </v-list-item>
      </v-toolbar-items>

      <LanguageSwitcher />
    </v-app-bar>
  </v-container>
</template>
<script>
import LanguageSwitcher from './LanguageSwitcher.vue'
export default {
  components: { LanguageSwitcher },
  data() {
    return {
      links: [
        { text: 'home', route: '/' },
        { text: 'achievement', route: '/achievements' },
        { text: 'devis', route: '/quote' },
        { text: 'contact', route: '/contact' },
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
<style>
/* a.nuxt-link-active {
  font-weight: bold;
} */
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #FFDD64;
}
/* a.nuxt-link-active {
  color:#FFDD64!important;
} */
/* exact link will show the primary color for only the exact matching link */
/* a.nuxt-link-exact-active {
  color: #FFDD64!important;
}*/
a {
  text-decoration: none;
  /* color: #fff !important; */
} 


</style>
