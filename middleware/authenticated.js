export default ({ store, redirect }) => {
    if (!store.getters['modules/user/isAuthenticated']) {
      return redirect('/')
    }
}