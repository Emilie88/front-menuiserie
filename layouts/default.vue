<template>
  <v-app dark>
    <toolbar-item/>
    <drawer-item v-if="drawer == true"/>
    <Nuxt />
    <footer-component/>
  </v-app>
</template>
<script>
import FooterComponent from '../components/FooterComponent.vue';
export default {
  components: { FooterComponent },
  computed: {
    drawer: {
      get() {
        return this.$store.getters.drawer;
      },

      set(value) {
        this.$store.commit("setDrawer", value);
      },
    },
  },
};
</script>