<template>
     <vue-picture-swipe :items="items" :options="options" />
</template>
<script>

export default {
  name: 'GalleryComponent',
  props: {
    items: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default () {
        return {
          bgOpacity: 0.95,
          shareEl: true,
          zoomEl: true
        }
      }
    }
  }
}
</script>