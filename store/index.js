import axios from 'axios'

export const state = () => ({
  lembarberita: [],
})

export const mutations = {
  SET_LEMBAR_BERITA: (state, payload) => (state.lembarberita = payload),
}

export const actions = {
  async getLembarBerita({ commit }) {
    // try {
    const { data } = await axios.get('https://apis.modoc.co.id/news/release')
    commit('SET_LEMBAR_BERITA', data.news_release)
    console.log(data)
    // } catch (e) {
    //   throw e
    // }
  },
}
