import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    codeVerifier: ref(''),
    code: ref(''),
    accessToken: ref('')
  }),
  actions: {
    getAccessToken() {
      const redirectUri = 'http://localhost:4000'
      const clientId = '7ec2672780684ab183cd3ab0b96d9549'

      let body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: this.code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: this.codeVerifier
      })
      const response = fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('HTTP status ' + response.status)
          }
          return response.json()
        })
        .then((data) => {
          this.accessToken = data.access_token
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  },
  persist: {
    key: 'userStore',
    storage: localStorage,
    paths: ['codeVerifier', 'code', 'accessToken'],
    debug: true
  }
})
