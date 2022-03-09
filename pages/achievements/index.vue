<template>
 <div id="achievements">
  <v-main>
    <div class="py-10"></div>
   
    <h1 class="display-1 font-weight-bold mb-3 text-uppercase text-center pb-4">
      {{ $t('myAchievements') }}
    </h1>
 <v-theme-provider light>
    <gallery-component
      :items="images"
      :options="{
        shareEl: false,
      }"
    />
 </v-theme-provider>
    <v-btn
          v-show="fab"
          v-scroll="onScroll"
          fab
          dark
          fixed
          bottom
          right
          outlined
          @click="$vuetify.goTo('#achievements')"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
        <div class="py-12"></div>
  </v-main>
 </div>
</template>
<script>
import images from '../../datas/images'
export default {
  data() {
    return {
      images,
      fab: false,
    }
  },
  methods:{
      onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
  }
}
</script>
