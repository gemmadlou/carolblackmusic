export const state = () => ({
  banner: false
})

export const mutations = {
  hideBanner(state) {
    state.banner = false
  },
  showBanner(state) {
    state.banner = true
  }
}
