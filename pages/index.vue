<template>
  <div>{{ articles }}</div>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.getters['article/articles']
    },
  },

  async created() {
    try {
      await this.$store.dispatch('article/fetchArticles')
    } catch (err) {
      // 暫定的な Error 表示
      alert(err.response.statusText)
    }
  },
}
</script>
