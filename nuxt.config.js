// import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s - front-menuiserie',
    titleTemplate: '%s',
    // title: 'Adrian Boghiu Menuisier',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios.js','~/plugins/vee-validate.js', '~/plugins/router.js',{ src: '~/plugins/gallery', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json',name: 'English' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json',name: 'Français' },
      { code: 'ro', iso: 'ro-RO', file: 'ro.json',name: 'Romana' }
    ],
    defaultLocale: 'fr',
    lazy: true,
    langDir: "lang/", 
    vueI18n: {
      fallbackLocale: "fr",
      silentFallbackWarn: true,
    },
    parsePages: true,
        // strategy: "no_prefix",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "FFF",
          secondary:"#FFDD64"
        },
        light: {
          primary: "#FFDD64",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  },
 
}
