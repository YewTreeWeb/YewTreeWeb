export const state = () => ({
  darkmode: true,
})
export const mutations = {
  toggleDarkmode: (state) => {
    const body = document.getElementsByTagName('body')[0]
    state.darkmode = !state.darkmode
    console.log(state.darkmode)
    state.darkmode
      ? (body.dataset.theme = 'dark')
      : (body.dataset.theme = 'light')
  },
}
