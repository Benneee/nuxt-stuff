export const state = () => ({
  posts: []
})

export const getters = {
  getPosts(state) {
    return state.posts
  }
}
