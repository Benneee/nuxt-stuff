<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="updatePost" />
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
  layout: 'admin',

  middleware: ['checkAuth', 'auth'],

  components: {
    AdminPostForm
  },

  async asyncData(context) {
    return context.app.$axios.$get(`/posts/${context.params.postId}.json`)
      .then(data => {
        return {
          loadedPost: { ...data, id: context.params.postId }
        }
      })
      .catch(error => context.error(error))
  },

  methods: {
    ...mapActions(['editPost']),

    async updatePost(postData) {
      await this.editPost(postData)
        .then(() => this.$router.push('/admin'))
    }
  }
}
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>
