<template>
  <div>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="text-uppercase mr-2"
      >{{ locale.code }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  // methods: {
  //   changeLanguage(lang) {
  //     this.$i18n.setLocale(lang);
  // this.$i18n.locale = lang;
  // },
  // },
}
</script>
