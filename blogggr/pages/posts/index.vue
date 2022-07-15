<template>
  <div class="posts-page">
    <PostList :posts="allPosts"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: 'log',

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
