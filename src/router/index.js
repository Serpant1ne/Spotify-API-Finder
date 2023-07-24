import { createRouter, createWebHistory } from 'vue-router'
import AuthorsView from '../views/AuthorsView.vue'
import AlbumView from '../views/AlbumView.vue'
import GenresView from '../views/GenresView.vue'
import PlaylistsView from '../views/PlaylistsView.vue'
import TracksView from '../views/TracksView.vue'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Authors',
      name: 'Authors',
      component: AuthorsView
    },
    {
      path: '/album',
      name: 'Albums',
      component: AlbumView
    },
    {
      path: '/genres',
      name: 'Genres',
      component: GenresView
    },
    {
      path: '/playlists',
      name: 'Playlists',
      component: PlaylistsView
    },
    {
      path: '/tracks',
      name: 'Tracks',
      component: TracksView
    },
  ]
})

export default router
