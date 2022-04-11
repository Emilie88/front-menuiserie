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
import constants from '../datas/constants.js';
import CardComponent from './CardComponent.vue';

export default {
  components: { CardComponent },
  data() {
    return {
     allServices: constants.allServices
    }
  },
}
</script>
