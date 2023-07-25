import { createRouter, createWebHistory } from 'vue-router'
import ArtistsView from '../views/ArtistsView.vue'
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
      name: 'home',
      component: HomeView,
    },
    {
      path: '/artist',
      name: 'artist',
      component: ArtistsView,
    },
    {
      path: '/album',
      name: 'album',
      component: AlbumView,
    },
    {
      path: '/genre',
      name: 'genre',
      component: GenresView
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: PlaylistsView
    },
    {
      path: '/track',
      name: 'track',
      component: TracksView
    },
  ]
})

export default router
