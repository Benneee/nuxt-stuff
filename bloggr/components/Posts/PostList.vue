<template>
    <section class="post-list">
      <PostPreview
        :is-admin="isAdmin"
        id="1"
        thumbnail='https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
        title="Hello there!"
        previewText="This is my first post!"
      />
      <PostPreview
        :is-admin="isAdmin"
        id="2"
        thumbnail='https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
        title="Hello again now!"
        previewText="This is my second post!"
      />
      <PostPreview
        :is-admin="isAdmin"
        id="3"
        thumbnail='https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
        title="Hello for the third time!"
        previewText="This is my third post!"
      />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";

export default {
  name: 'PostList',

  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },

  components: {
      PostPreview,
  }
}
</script>

<style scoped>
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
