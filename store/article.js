export const actions = {
  async fetchArticles({ commit }) {
    const response = await this.$axios.get('api/v1/articles')
    console.log(response.data)
  },
}
