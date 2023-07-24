<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body class="bg-background">
    <header class="pt-6 mb-6">
    <h1 class="text-text text-4xl font-bold text-center mb-6">Spotify API Finder</h1>

    <nav class="text-accent font-light max-w-lg flex justify-between mx-auto mb-6">
      <RouterLink class="py-1 px-2 active" to="/authors">Authors</RouterLink>
      <RouterLink class="py-1 px-2" to="/album">Album</RouterLink>
      <RouterLink class="py-1 px-2" to="/genres">Genres</RouterLink>
      <RouterLink class="py-1 px-2" to="/tracks">Tracks</RouterLink>
      <RouterLink class="py-1 px-2" to="/playlists">Playlists</RouterLink>
    </nav>
  </header>

  <RouterView />
  </body>
</template>

<style scoped></style>
