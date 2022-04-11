<template>
  <v-card class="mx-auto" height="380px">
    <v-img class="white--text align-end" height="200px" :src="item.src">
    </v-img>
    <v-card-title><span class="text-capitalize">{{ $t(item.title) }}</span></v-card-title>
    <v-card-text class="text--primary">
      <div>{{ $t(item.description) }}</div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
    props:{
        item:{
            type: Object,
            required: true
        }
    }
}
</script>
