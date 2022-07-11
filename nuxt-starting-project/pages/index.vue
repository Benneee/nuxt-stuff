<template>
  <section class="container">
    <nuxt-link to="/users">Users</nuxt-link>
    <br />
    <button @click="goToProductsPage">Products</button>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      posts: []
    }
  },

  computed: {
    ...mapGetters(['getPosts']),
  },

  created() {
    setTimeout(() => {
      console.log('posts: ', this.getPosts);
    }, 2500)
  },

  methods: {
    goToProductsPage() {
      this.$router.push("/products");
    }
  }
}
</script>

<style scoped>
</style>
