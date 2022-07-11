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
  }
}

export const actions = {
  // This fetches the data once at the start of the application and can be used app-wide
  nuxtServerInit(vuexContext, context) {
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
  }
}
