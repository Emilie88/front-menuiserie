<template>
  <div>
    <button @click="changeLanguage('en')">EN</button>
    <button @click="changeLanguage('fr')">FR</button>
    <!-- <button @click="changeLanguage('ro')">RO</button> -->
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      selectedValue: '',
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
}
</script>
