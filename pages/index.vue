<template>
  <v-main>
    <section id="hero" class="mt-7">
      <v-carousel
        cycle
        hide-delimiter-background
        :show-arrows="false"
        delimiter-icon="mdi-minus"
      >
        <v-carousel-item
          v-for="(item, i) in slides"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-row
            class="title fill-height hidden-xs-only"
            align="center"
            justify="center"
            >{{ item.title }}</v-row
          >
        </v-carousel-item>
      </v-carousel>
    </section>

    <AboutItem />

    <section id="cards">
      <v-container>
        <h1 class="display-1 font-weight-bold mb-3 text-uppercase text-center">
          {{ $t('benefits') }}
        </h1>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <all-services />
        <div class="text-right">
          <v-btn class="ma-2 text-center" to="/achievements" outlined right color="secondary">
            {{ $t('achievement') }} <v-icon medium> mdi-chevron-right </v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>

    <section id="avis">
      <div class="py-12"></div>
      <!-- <item-avis /> -->
    </section>

    <section id="contact">
      <contact-component />
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        fab
        dark
        fixed
        bottom
        right
        outlined
        @click="$vuetify.goTo('#hero')"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </section>
  </v-main>
</template>
<script>
import AllServices from '../components/AllServices.vue'
import ContactComponent from '../components/ContactComponent.vue'
export default {
  components: { AllServices, ContactComponent },
   nuxtI18n: {
    paths: {
      en: '/', 
      fr: '/', 
      ro: '/' 
    }
  },
  data() {
    return {
      title: this.$t('titleHome'),
      fab: false,
      slides: [
        {
          // title: this.$t('titleHome'),
          text: 'Adrian Boghiu',
          src: require('@/assets/carpenter.jpg'),
        },
        {
          src: require('@/assets/img/cuisine/cuisineAlexPD.jpg'),
          link: this.$t('quoteRequest'),
        },

        {
          // title: this.$t('titleHome'),
          text: 'Adrian Boghiu',
          src: require('@/assets/img/biblio/library.jpeg'),
        },
        { src: require('@/assets/img/placard/etagers.jpeg') },
      ],
    }
  },
  head() {
    return {
      title: `Adrian Boghiu ${this.title}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: `Adrian Boghiu ${this.title}`,
        },
      ],
    }
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
