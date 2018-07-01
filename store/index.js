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
    axios.get("http://jsonplaceholder.typicode.com/posts").then((result) => {
      ctx.commit("set", result.data)
    })
  }

}
