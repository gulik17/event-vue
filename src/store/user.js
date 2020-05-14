import axios from 'axios'

export default {
  state: {
    user: {}
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    clearUser (state) {
      state.user = {}
    }
  },
  actions: {
    async fetchUser ({ dispatch, commit }) {
      const token = await dispatch('getToken')
      await axios.get('https://eventreligion.com/api/v1/uinfo.php?token=' + token).then((response) => {
        commit('setUser', response.data.user)
      })
    }
  },
  getters: {
    user: s => s.user
  }
}
