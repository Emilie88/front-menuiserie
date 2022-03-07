<template>
    <v-carousel
      cycle
      :show-arrows="false"
      delimiter-icon="mdi-minus"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-carousel-item v-for="(slide, i) in content" :key="i">
        <v-img :src="slide.url" />
      </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
}
</script>
