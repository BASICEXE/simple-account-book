export default function ({ store, redirect }) {
  if (store.state.agreement) {
    return redirect('/')
  }
}
