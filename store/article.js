export const state = () => {
  return {
    articles: [],
  }
}

export const getters = {}

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
}

export const actions = {
  async fetchArticles({ commit }) {
    const response = await this.$axios.get('api/v1/articles')
    const articles = response.data
    commit('setArticles', articles)
  },
}
