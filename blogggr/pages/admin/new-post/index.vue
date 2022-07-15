<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
  name: 'NewPost',

  middleware: 'auth',

  layout: 'admin',

  components: {
    AdminPostForm
  },

  methods: {
    ...mapActions(['addPost']),

    async onSubmitted(postData) {
      await this.addPost(postData)
        .then(() => this.$router.push("/admin"));
    }

  }

}
</script>

<style scoped>
  .new-post-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .new-post-form {
      width: 500px;
    }
  }

</style>
