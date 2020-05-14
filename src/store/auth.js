import axios from 'axios'

export default {
  actions: {
    async login ({ dispatch, commit }, formData) {
      await axios.post('https://eventreligion.com/api/v1/auth.php', formData)
        .then((response) => {
          dispatch('saveToken', response.data.token)
        })
        .catch((e) => {
          throw e
        })
    },
    getToken () {
      return localStorage.token
    },
    clearToken () {
      localStorage.token = ''
    },
    saveToken ({ dispatch, commit }, token) {
      localStorage.token = token
    },
    async logout ({ dispatch, commit }) {
      const token = await dispatch('getToken')
      await axios.get('https://eventreligion.com/api/v1/logout.php?token=' + token)
        .then((response) => {
          commit('clearUser')
          dispatch('clearToken')
        })
        .catch((e) => {
          throw e
        })
    }
  }
}
