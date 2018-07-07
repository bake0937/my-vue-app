import axios from "axios"

export const state = () => ({
  posts: []
})

export const mutations = {
  set(state, items) {
    state.posts = items
  },
}

export const actions = {
  load(ctx) {
    axios.get("http://localhost:4000/api/v1/tweets").then((result) => {
      ctx.commit("set", result.data)
    })
  }
}
