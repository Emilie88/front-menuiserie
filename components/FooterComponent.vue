<template>
  <div id="footer">
    <v-footer class="justify-center" color="#292929" fixed>
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} — Made with 💛 by Emilia Boghiu
      </div>
      <br />
      <br />
      <v-btn icon href="https://www.facebook.com/ArtMenuiserie-113058580082944">
        <v-icon color="#bdbdbd">mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fadrienmenuiserie%3Futm_medium%3Dcopy_link%26fbclid%3DIwAR3EBK904hTTVP1wagdmttgjflUDbD0mFBhYidlUsgqIkU4J6rQxOeEuIx0&h=AT21udKh7JU86cZLRskitGMlVFJOhCwRdZaLQOraVZbNw_zWusKWrYsHQHw9p-Vyo1kwIVBDgodGSuSR9sDDIBwd5qb9igmLHgvcvwdhtHjCt6KVcfBkc826DEGh2zq52CQIXAZhkx9ffoi1Zfs3cA">
      <v-icon color="#bdbdbd">mdi-instagram</v-icon>
      </v-btn>
    </v-footer>
  </div>
</template>
<script>
export default {
    name: "FooterComponent"
}
</script>
