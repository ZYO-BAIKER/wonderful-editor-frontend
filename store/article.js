export const state = () => {
  return {
    articles: [],
    article: {},
  }
}

export const getters = {
  articles: (state) => state.articles,
  article: (state) => state.article,
}

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },

  setArticle(state, article) {
    state.article = article
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

  async fetchArticle({ commit }, id) {
    const response = await this.$axios.get(`api/v1/articles/${id}`)
    const article = response.data
    commit('setArticle', article)
  },

  async deleteArticle(_, id) {
    await this.$axios.delete(`api/v1/articles/${id}`)
  },
}
