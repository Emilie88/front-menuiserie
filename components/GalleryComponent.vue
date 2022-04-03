<template>
  <div id="réalisations">
    <vue-picture-swipe :items="items" :options="options" />
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      outlined
      @click="$vuetify.goTo('#realisations')"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'GalleryComponent',
  props: {
    items: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      required: false,
      default() {
        return {
          bgOpacity: 0.95,
          shareEl: true,
          zoomEl: true,
        }
      },
    },
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
  },
}
</script>
