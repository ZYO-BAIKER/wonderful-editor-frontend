<template>
  <v-container>
    <v-row :class="$style.layout" justify="center">
      <v-col cols="8">
        <h2 class="mb-5">ユーザー登録</h2>
        <v-form>
          <v-text-field
            v-model="email"
            dense
            type="email"
            label="メールアドレス"
            outlined
            placeholder="test@example.com"
            class="mb-5"
          />
          <v-text-field
            v-model="password"
            dense
            type="password"
            label="パスワード(半角英数字)"
            outlined
            placeholder="********"
            class="mb-10"
          />
          <v-btn
            color="#fb8c00"
            block
            rounded
            depressed
            nuxt
            :loading="loading"
            class="white--text font-weight-bold"
            @click="submit"
            >ログイン</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      loading: false,
    }
  },

  methods: {
    async submit() {
      this.loading = true
      const params = {
        email: this.email,
        password: this.password,
      }

      try {
        await this.$store.dispatch(`user/signIn`, params)
        this.$router.push('/')
      } catch (err) {
        // 暫定的な Error 表示
        alert(err.response.data.errors.full_messages)
      } finally {
        this.loading = false
      }
    },
  },

  middleware: ['before_auth'],
}
</script>

<style module lang="scss">
.layout {
  background: #fff;
  margin: 20px auto 0;
  width: 500px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
}
</style>
