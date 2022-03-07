<template>
    <v-dialog
      v-model="dialog"
      v-bind="$attrs"
      fullscreen
      hide-overlay
      style="overflow-y: unset;"
    >
        <template #activator="{ on }">
            <slot name="activator" v-bind="{ on }" />
        </template>

      <v-card >
        <v-card-title class="my-3">
            <v-btn  absolute right icon  @click="show(false)">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-text>
            <slot name="carousel" />
        </v-card-text>
      </v-card>
    </v-dialog>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
    show(value) {
      this.dialog = value;
    },
  },
  }
</script>