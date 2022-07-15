export const state = () => ({
  loadedPosts: [],
  token: null
})

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  },

  isAuthenticated(state) {
    return state.token != null;
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
  },

  setToken(state, token) {
    state.token = token
  },

  clearToken(state) {
    state.token = null
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
    return this.$axios.$post(`/posts.json?auth=${context.state.token}`, createdPost)
    .then(data => {
        context.commit('addPost', { ...createdPost, id: data.name })
    })
    .catch(error => console.error("error: ", error))
  },

  async editPost(context, editedPost) {
    return this.$axios.$put(`${process.env.baseUrl}/posts/${editedPost.id}.json?auth=${context.state.token}`, editedPost)
    .then(() => {
      context.commit('editPost', editedPost)
    })
    .catch(error => context.error(error))
  },

  async authenticateUser(context, authData) {
    let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`;
    if (!authData.isLogin) {
      authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`
    }
    return this.$axios.$post(
      authUrl,
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }
    )
    .then(result => {
      // console.log("result: ", result);
      const { idToken, expiresIn } = result;
      context.commit("setToken", idToken);
      context.dispatch('setLogoutTimer', expiresIn * 1000)
    })
    .catch( error => console.log("error: ", error))
  },

  setLogoutTimer(context, duration) {
    setTimeout(() => {
      context.commit('clearToken')
    }, duration)
  }
}
