<template>
  <!-- <v-app dark> -->
    <v-main>
      <section id="hero">
        <v-row no-gutters>
        <v-img
            :src="require('@/assets/img/cuisine/cuisineAlexPD.jpg')"
          >
        <!-- <div class="py-12"></div> -->
        <v-theme-provider dark>
          <v-container fill-height fluid>
            <!-- <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              > -->
            <!-- <v-carousel
              class="mt-14"
              cycle
              height="500"
              hide-delimiter-background
              :show-arrows="false"
              delimiter-icon="mdi-minus"
            >
              <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                :src="slide.src"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <v-col class="white--text text-center mt-12" cols="12">
                    <span
                      v-if="slide.text"
                      :class="[
                        $vuetify.breakpoint.smAndDown
                          ? 'display-2 font-weight-black'
                          : 'display-3 font-weight-black',
                      ]"
                    >
                      {{ slide.text }}
                    </span>

                    <p
                      v-if="slide.title"
                      :class="[
                        $vuetify.breakpoint.smAndDown
                          ? 'display-1 font-weight-light'
                          : 'display-2 font-weight-light',
                      ]"
                    >
                      {{ slide.title }}
                    </p>
                    <v-btn
                      v-if="slide.link"
                      outlined
                      @click="$router.push('/devis')"
                    >
                      {{ slide.link }}
                    </v-btn>
                  </v-col>
                  <v-col cols="12" align="center" justify="center">
                    <v-btn fab outlined @click="$vuetify.goTo('#about-me')">
                      <v-icon>mdi-chevron-double-down</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel> -->
            <!-- <v-col class="white--text text-center" cols="12" tag="h1">
                    <span
                      :class="[
                        $vuetify.breakpoint.smAndDown
                          ? 'display-1 font-weight-light text-uppercase'
                          : 'display-2 font-weight-light text-uppercase',
                      ]"
                    >
                      {{ $t("titleHome") }}
                    </span>

                    <br />

                    <span
                      :class="[
                        $vuetify.breakpoint.smAndDown
                          ? 'display-2 font-weight-black'
                          : 'display-3 font-weight-black',
                      ]"
                    >
                      Adrian BOGHIU
                    </span>
                  </v-col> -->

            <!-- <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn> -->
            <!-- </v-row> -->
          </v-container>
        </v-theme-provider>
        </v-img>
        </v-row>
      </section>

      <!-- <About /> -->
      <section id="cards">
        <v-container>
          <h2
           color="primary"
            :class="[
              $vuetify.breakpoint.smAndDown
                ? 'display-1 font-weight-bold mb-3 text-uppercase text-center'
                : 'display-2 font-weight-bold mb-3 text-uppercase text-center',
            ]"
           
          >
            {{ $t("achievement") }}
          </h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <!-- <card-cards /> -->
          <div class="text-right">
            <v-btn
              class="ma-2 text-center"
              outlined
              right
              color="primary"
            >
            Toutes les projets
              <!-- {{ $t("allProjects") }} -->
            </v-btn>
          </div>
        </v-container>
      </section>

      <section id="avis">
        <div class="py-12"></div>
        <!-- <item-avis /> -->
      </section>

      <section id="contact">
        <!-- <Contact /> -->
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
  <!-- </v-app> -->
</template>
<script>

export default { 
  data() {
    return {
      fab: false,
      // slides: [
      //   {
      //     title: this.$t("titleHome"),
      //     text: "Adrian Boghiu",
      //     src: require("@/assets/carpenter.jpg"),
      //   },
      //   {
      //     src: require("@/assets/img/cuisine/cuisineAlexPD.jpg"),
      //     link: this.$t("quoteRequest"),
      //   },

      //   {
      //     title: this.$t("titleHome"),
      //     text: "Adrian Boghiu",
      //     src: require("@/assets/carpenter.jpg"),
      //   },
      //   { src: require("@/assets/img/cuisine/cuisineAlexPD.jpg") },
      // ],
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
  },
};
</script>
