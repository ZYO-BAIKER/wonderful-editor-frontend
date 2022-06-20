export const state = () => {
  return {
    articles: [],
  }
}

export const getters = {
  articles: (state) => state.articles,
}

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

  async createArticle(_, paramas) {
    await this.$axios.post('api/v1/articles', paramas)
  },
}
