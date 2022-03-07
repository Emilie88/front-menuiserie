<template>
  <v-main>
    <div class="py-12"></div>

    <v-container>
      <h1 class="display-1 font-weight-bold mb-3 text-uppercase text-center">
        {{ $t('quoteRequest') }}
      </h1>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <div>
        <strong>{{ $t('titleHome') }}</strong> {{ $t('devisContent') }}
      </div>

      <br />
      <v-theme-provider>
        <v-card class="pa-10">
          <ValidationProvider v-slot="{ handleSubmit }" rules="required|email">
            <v-form
              ref="form"
              lazy-validation
              @submit.prevent="handleSubmit(submitDevis)"
            >
              <v-row>
                <v-col md="12">
                  <text-field
                    v-model="body.name"
                    flat
                    color="lime darken-3"
                    name="name"
                    :label="$t('name')"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col md="6" xs="12">
                  <text-field
                    v-model="body.phone"
                    color="lime darken-3"
                    name="phone"
                    :label="$t('phone')"
                    required
                  />
                </v-col>
                <v-col md="6" xs="12">
                  <text-field
                    v-model="body.mail"
                    color="lime darken-3"
                    name="mail"
                    :label="$t('mail')"
                    type="email"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col md="12">
                  <text-field
                    v-model="body.addresse"
                    color="lime darken-3"
                    name="addresse"
                    :label="$t('address')"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col md="6" xs="12">
                  <text-field
                    v-model="body.city"
                    color="lime darken-3"
                    name="city"
                    :label="$t('city')"
                    required
                  />
                </v-col>
                <v-col md="6" xs="12">
                  <text-field
                    v-model="body.zipcode"
                    color="lime darken-3"
                    name="zipcode"
                    :label="$t('zipCode')"
                    required
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col md="12">
                  <text-field
                    v-model="body.subject"
                    color="lime darken-3"
                    name="subject"
                    :label="$t('subject')"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col md="12">
                  <text-areea
                    v-model="body.message"
                    color="lime darken-3"
                    name="message"
                    :label="$t('message')"
                    required
                  />
                </v-col>
              </v-row>
              <v-row align="center" justify="center">
                <v-btn
                  class="mr-4"
                  type="submit"
                  outlined
                  color="lime darken-3"
                  medium
                >
                  {{ $t('send') }}
                </v-btn>
              </v-row>
            </v-form>
          </ValidationProvider>
          <span v-text="$t('star')" />
        </v-card>
      </v-theme-provider>
    </v-container>

    <div class="py-12"></div>
  </v-main>
</template>
<script>
import TextAreea from '../../components/TextAreea.vue'
import TextField from '../../components/TextField.vue'
export default {
  components: { TextAreea, TextField },
  data() {
    return {
      body: {
        name: '',
        phone: '',
        mail: '',
        address: '',
        city: '',
        zipcode: '',
        subject: '',
        message: '',
      },
    }
  },

  methods: {
    async submitDevis() {
      try {
        await this.$http.post('https://127.0.0.1:8000/api/add-devis', this.body)

        // Success snackbar
        this.$store.dispatch('show', {
          text: 'Your devis has been send',
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
<style scoped>
.v-icon.v-icon.v-icon--link {
  color: white;
}
</style>
