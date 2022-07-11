<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted "/>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
  name: 'NewPost',

  layout: 'admin',

  components: {
    AdminPostForm
  },

  methods: {
    onSubmitted(postData) {
      axios.post("https://blogggr-1ddbc-default-rtdb.firebaseio.com/posts.json", {
        ...postData, updatedDate: new Date()})
      .then(result => console.log("result: ", result))
      .catch(error => console.error("error: ", error))
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
