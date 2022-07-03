<template>
  <section class="container">
    <nuxt-link to="/users">Users</nuxt-link>
    <br />
    <button @click="goToProductsPage">Products</button>
  </section>
</template>

<script>
export default {
  methods: {
    goToProductsPage() {
      this.$router.push("/products");
    }
  }
}
</script>

<style scoped>
</style>
