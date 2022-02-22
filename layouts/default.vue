<template>
  <v-app dark>
    <toolbar-item/>
    <drawer-item v-if="drawer == true"/>
    <Nuxt />
  </v-app>
</template>
<script>
export default {
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