import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useArtistStore = defineStore('dataStore', {
    state: () => ({
        artistData: {
            ID: ref(''),
            followersCount: ref(0),
            name: ref(''),
            images: ref(), // array
            tracks: ref(), // array
            albums: ref() // array
        },
        
        isLoading: false
    }),
    getters:{
        
    },
    actions: {
        async getID(request){
            // we need to get artist ID from searchbar to get more info about him
            const artistName = request.split(' ').join('+')
            
            const res = await fetch('https://api.spotify.com/v1/search?q=' + artistName + '&type=artist&market=US&limit=1', {
                headers: {
                    Authorization: 'token' 
                }
            })
            const data = res.json()
            this.artistData.ID = data.artists.items[0].id
            return data.artists.items[0].id
        },

        async getData(request){
            // get followers, name and images of the Artist
            const ID = this.getID(request)

            const res = await fetch('https://api.spotify.com/v1/artists/' + ID, {
                headers: {
                    Authorization: 'token' 
                }
            })
            const data = await res.json()
            this.artistData.followersCount = data.followers.total 
            this.artistData.name = data.name
            this.artistData.images = data.images
        },
        
        async getTopTracks(request){
            // get top 5 tracks from the artist (market US)
            const ID = this.getID(request)

            const res = await fetch('https://api.spotify.com/v1/artists/'+ ID +'/top-tracks?market=us', {
                headers: {
                    Authorization: 'token' 
                }
            })
            const data = await res.json()
            this.artistData.tracks = data.tracks
        },

        async getAlbums(request){
            // get top 3 albums from the artist (market US )
            const ID = this.getID(request)

            const res = await fetch('https://api.spotify.com/v1/artists/'+ ID +'/albums?market=us&limit=3', {
                headers: {
                    Authorization: 'token' 
                }
            })
            const data = await res.json()
            this.artistData.albums = data.items
        }
    }
})