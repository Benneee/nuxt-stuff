.<template>
  <div>
    <input v-model="userId" type="text">
    <button @click="onLoadUser">Load User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
    }
  },

  layout: 'users',

  methods: {
    onLoadUser() {
      this.$router.push(`/users/${this.userId}`)
    }
  }

}
</script>

<style>

</style>
