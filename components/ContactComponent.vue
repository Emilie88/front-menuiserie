<template>
  <v-container>
    <h1 class="display-1 font-weight-bold mb-3 text-uppercase text-center">
      {{ $t('contact') }}
    </h1>

    <v-responsive class="mx-auto mb-12" width="56">
      <v-divider class="mb-1"></v-divider>

      <v-divider></v-divider>
    </v-responsive>

    <v-theme-provider>
      <v-row>
        <v-col cols="12" md="6" xs="12">
          {{ $t('join') }}

          <div>
            <v-icon color="white"> mdi-email </v-icon>
            <span> boghiu.adrien@gmail.com</span>
          </div>

          <div>
            <v-icon color="white"> mdi-phone </v-icon>
            <span> 06 63 55 37 34</span>
          </div>

          <div class="googlemap">
            <iframe
              src="https://maps.google.com/maps?q=le%20raincy&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
            ></iframe>
          </div>
        </v-col>

        <v-col cols="12" md="6" xs="12">
          <div>{{ $t('liveMessage') }}</div>
          <br />

          <ValidationObserver v-slot="{ handleSubmit }" rules="required|email">
            <v-form
              ref="form"
              lazy-validation
              @submit.prevent="handleSubmit(submit)"
            >
              <text-field
                v-model="body.name"
                flat
                color="lime darken-3"
                :label="$t('name')"
                required
              />

              <text-field
                v-model="body.email"
                flat
                color="lime darken-3"
                :label="$t('mail')"
                type="email"
                required
              />

              <text-field
                v-model="body.subject"
                flat
                color="lime darken-3"
                :label="$t('subject')"
                required
              />

              <text-areea
                v-model="body.message"
                flat
                color="lime darken-3"
                :label="$t('message')"
                required
              />

              <v-row class="mt-3">
                <span v-text="$t('star')" />
                <v-spacer></v-spacer>
                <v-btn
                  class="mr-4"
                  type="submit"
                  outlined
                  medium
                  color="secondary"
        
                >
                  {{ $t('send') }}
                </v-btn>
              </v-row>
            </v-form>
          </ValidationObserver>
        </v-col>
      </v-row>
    </v-theme-provider>

    <div class="py-10"></div>
  </v-container>
</template>
<script>
import TextAreea from './TextAreea.vue'
import TextField from './TextField.vue'
export default {
  name: 'ContactComponent',
  components: { TextField,TextAreea },
  data() {

    return {
      body: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    }
  },

  methods: {
    async submit() {
      try {
        await this.$http.post(
          'http://localhost:3001/api/contact',
          this.body
        )

        // Success snackbar
        this.$store.dispatch('show', {
          text: 'Your message has been send',
          type: 'success',
        })
        this.$refs.form.reset()
      } catch (error) {
        // Error snackbar
        this.$store.dispatch('show', {
          text: error.message,
          type: 'error',
        })
        this.$refs.form.reset()
      }
    },
  },
}
</script>
