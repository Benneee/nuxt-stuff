<template>
  <div class="posts-page">
    <PostList :posts="allPosts"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostList from "../../components/Posts/PostList.vue";

export default {
  components: {
    PostList
  },

  fetch(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
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
          ]
        })
      }, 1000)
    })
    .then((data) => {
      context.store.commit('setPosts', data.loadedPosts)
    })
    .catch(e => {
      context.error(new Error())
    })
  },

  computed: {
    ...mapGetters(['loadedPosts']),

    allPosts() {
      return this.loadedPosts;
    }
  }
}
</script>

<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
