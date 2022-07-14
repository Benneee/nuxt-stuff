export const state = () => ({
  loadedPosts: []
})

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  }
}

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },

  addPost(state, post) {
    state.loadedPosts.push(post)
  },

  editPost(state, editedPost) {
    const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
    state.loadedPosts[postIndex] = editedPost
  }
}

export const actions = {
  // This fetches the data once at the start of the application and can be used app-wide
  async nuxtServerInit(vuexContext, context) {
    return context.app.$axios.$get(`/posts.json`)
      .then(data => {
        const postsArray = [];
        for (const key in data) {
          postsArray.push({ ...data[key], id: key })
        }

        vuexContext.commit('setPosts', postsArray)
      })
      .catch(error => context.error(error))
  },

  setPosts({ commit }, posts) {
    commit('setPosts', posts)
  },

  async addPost(context, post) {
    const createdPost = { ...post, updatedDate: new Date() }
    return this.$axios.$post(`/posts.json`, createdPost)
    .then(data => {
        context.commit('addPost', { ...createdPost, id: data.name })
    })
    .catch(error => console.error("error: ", error))
  },

  async editPost(context, editedPost) {
    return this.$axios.$put(`${process.env.baseUrl}/posts/${editedPost.id}.json`, editedPost)
    .then(() => {
      context.commit('editPost', editedPost)
    })
    .catch(error => context.error(error))
  }
}
