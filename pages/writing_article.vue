<template>
  <form id="writing-article" :class="$style.article_form">
    <v-text-field
      v-model="title"
      single-line
      outlined
      name="title"
      placeholder="タイトル"
      :class="$style.title_form"
    />
    <div :class="$style.edit_area">
      <v-textarea
        v-model="body"
        outlined
        no-resize
        hide-details
        height="100%"
        name="body"
        placeholder="記事の内容を入力してください"
        class="body-form"
      ></v-textarea>
    </div>
    <div :class="$style.create_btn_area">
      <v-btn
        color="#3085DE"
        class="font-weight-bold white--text"
        @click="createArticle"
        >記事を投稿
      </v-btn>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      title: '',
      body: '',
      loading: false,
    }
  },

  methods: {
    async createArticle() {
      this.loading = true

      const params = {
        title: this.title,
        body: this.body,
        status: 'published',
      }

      try {
        await this.$store.dispatch('article/createArticle', params)
        this.$router.push('/')
      } catch (err) {
        // 暫定的な Error 表示
        alert(err.response.data.errors.full_messages)
      } finally {
        this.loading = false
      }
    },
  },

  middleware: ['authed'],
}
</script>

<style lang="scss" module>
.article_form {
  margin: 5px;
  height: calc(100% - 64px - 10px);
  display: flex;
  flex-flow: column;
  width: 100%;
}

.title_form {
  flex: none;
  background: #fff;
}

.edit_area {
  height: 100%;
  display: flex;
  overflow: hidden;
  background: #fff;
  margin-bottom: 10px;
}

.create_btn_area {
  text-align: right;
}
</style>

<style lang="scss">
#writing-article {
  // Vuetify の class に対して指定
  body-form > .v-text-field fieldset,
  .v-text-field .v-input__control {
    height: 100%;
  }
}
</style>
