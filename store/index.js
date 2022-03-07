import axios from 'axios'

export const state = () => ({
  lembarberita: [],
})

export const mutations = {
  SET_LEMBAR_BERITA: (state, payload) => (state.lembarberita = payload),
}

export const actions = {
  async getLembarBerita({ commit }) {
    const { data } = await axios.get('https://apis.modoc.co.id/news/release?limit=5&offset=1')
    commit('SET_LEMBAR_BERITA', data.news_release)
  },
}
