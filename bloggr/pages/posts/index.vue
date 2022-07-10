<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from "../../components/Posts/PostList.vue";

export default {
  components: {
    PostList
  },

  asyncData(context) {
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
      return data
    })
    .catch(e => {
      context.error(new Error())
    })
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
