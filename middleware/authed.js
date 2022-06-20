export default function ({ store, redirect }) {
  const isSingedIn = store.state.user.isSignedIn
  // 認証前だったらログインページへ
  if (!isSingedIn) {
    return redirect('/sign_in')
  }
}
