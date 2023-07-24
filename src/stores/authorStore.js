import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthorStore = defineStore('dataStore', {
    state: () => ({
        data: {},
        authorID: ref(''),
        isLoading: false
    }),
    getters:{
        
    },
    actions: {
        async getAuthorID(request){
            // we need to get Author ID from searchbar to get more info about him
            const authorName = request.split(' ').join('+')
            
            const res = await fetch('https://api.spotify.com/v1/search?q=' + authorName + '&type=artist&market=US&limit=1', {
                headers: {
                    Authorization: 'Bearer BQCecbrrIku0Wvj4w3LHMQM6Okkk4_6sonpPZl_NnYTULWZ-xN87NjXhfOhgAWjGiA2QsU3FfYXNJDNH6okvU6pZrNGeHr1njKxHW1ku-52Eq94zCDo' 
                }
            })
            const data = await res.json()
            // this.authorID = data
            return data.artists.items[0].id
        },

        async getAuthorData(request){

        }
    }
})