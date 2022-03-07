<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) in allServices" :key="index" md="4">
        <card-component :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardComponent from './CardComponent.vue';
export default {
  components: { CardComponent },
  data() {
    return {
      allServices: [
        {
          title: this.$t('cuisine '),
          src: require('@/assets/img/cuisine/cuisineAlexPD.jpg'),
          description: this.$t('kitchenDescription'),
        },
        {
          title: this.$t('bathTitle'),
          src: require('@/assets/img/sdb/IMG20171211.jpg'),
          description: this.$t('bathDescription'),
        },
        {
          title: this.$t('biblio'),
          src: require('@/assets/img/biblio/library.jpeg'),
          description: this.$t('libraryDescription'),
        },
        {
          title: this.$t('placard'),
          src: require('@/assets/thumbs/placard/placard7.jpeg'),
          description: this.$t('cupboardDescription'),
        },
         {
          title: this.$t('dressing'),
          src: require('@/assets/thumbs/dressing/img.jpg'),
          description: this.$t('cupboardDescription'),
        },
        {
          title: this.$t('stairs'),
          src: require('@/assets/thumbs/stairs/colimacon.jpg'),
          description: this.$t('stairsDescription'),
        },
      ],
    }
  },
}
</script>
