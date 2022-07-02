<template>
  <section class="container">
    <nuxt-link to="/users">Users</nuxt-link>
    <br />
    <button @click="goToProductsPage">Products</button>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  },

  methods: {
    goToProductsPage() {
      this.$router.push("/products");
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
