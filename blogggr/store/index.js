import axios from "axios";

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
    return axios.get("https://blogggr-1ddbc-default-rtdb.firebaseio.com/posts.json")
      .then(resp => {
        const postsArray = [];
        for (const key in resp.data) {
          postsArray.push({ ...resp.data[key], id: key })
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
    return axios.post("https://blogggr-1ddbc-default-rtdb.firebaseio.com/posts.json", createdPost)
    .then(res => {
        context.commit('addPost', { ...createdPost, id: res.data.name })
    })
    .catch(error => console.error("error: ", error))
  },

  async editPost(context, editedPost) {
    return axios.put(`https://blogggr-1ddbc-default-rtdb.firebaseio.com/posts/${editedPost.id}.json`, editedPost)
    .then(() => {
      context.commit('editPost', editedPost)
    })
    .catch(error => context.error(error))
  }
}
