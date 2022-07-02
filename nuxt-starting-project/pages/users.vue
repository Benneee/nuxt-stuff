<template>
<section>
    <div>
      <input v-model="userId" type="text">
      <button @click="onLoadUser">Load User</button>
    </div>
    <!-- The child component, in this case, "_id", will now show below -->
    <nuxt-child />
  </section>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
    }
  },

  methods: {
    onLoadUser() {
      this.$router.push(`/users/${this.userId}`)
    }
  }

}
</script>

<style>

</style>
