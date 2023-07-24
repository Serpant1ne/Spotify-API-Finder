<script>
import { RouterLink, RouterView } from 'vue-router'
import SearchForm from './components/SearchForm.vue'
import { ref } from 'vue'
export default {
  components: { SearchForm },
  data() {
    return {
      searchType: ref('')
    }
  },
  created() {
    this.searchType = this.$route.name
  },
  watch: {
    $route(to, from) {
      this.searchType = to.name
    }
  },
  setup() {

  }
}
</script>

<template>
  <body class="bg-background min-h-screen">
    <header class="pt-6 mb-6 flex flex-col">
      <RouterLink to="/" class="text-text text-4xl font-bold mb-6 mx-auto">Spotify API Finder</RouterLink>

      <nav class="text-accent font-light min-w-lg flex justify-between mx-auto mb-6 gap-8">
        <RouterLink class="py-1 px-2 active" to="/author">Authors</RouterLink>
        <RouterLink class="py-1 px-2" to="/album">Albums</RouterLink>
        <RouterLink class="py-1 px-2" to="/genre">Genres</RouterLink>
        <RouterLink class="py-1 px-2" to="/track">Tracks</RouterLink>
        <RouterLink class="py-1 px-2" to="/playlist">Playlists</RouterLink>
      </nav>
      <SearchForm :type="searchType" />
    </header>

    <RouterView />
  </body>
</template>

<style scoped></style>
