export const store = () => ({
  agreement: false
})

export const mutations = {
  change (store) {
    store.agreement = !store.agreement
  }
}

