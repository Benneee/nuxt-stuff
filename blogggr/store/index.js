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
  nuxtServerInit({ commit }, posts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('setPosts',  [
            {
            id: 1,
            thumbnail:'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
            title:"Hello there!",
            previewText:"This is my first post!",
            },
            {
              id: 2,
              thumbnail:'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
              title:"Hello again now!",
              previewText:"This is my second post!",
            },
            {
              id: 3,
              thumbnail:'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
              title:"Hello for the third time!",
              previewText:"This is my third post!"
            }
        ]);
        resolve()
    })
    }, 1000)
  },
  setPosts({ commit }, posts) {
    commit('setPosts', posts)
  }
}
