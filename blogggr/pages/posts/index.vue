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
