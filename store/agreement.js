export const state = () => ({
  consent: false
})

export const mutations = {
  change (state) {
    state.consent = !state.consent
  }
}

