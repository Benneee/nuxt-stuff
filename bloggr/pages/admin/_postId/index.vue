<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
  layout: 'admin',

  components: {
    AdminPostForm
  },

  data() {
    return {
      loadedPost: {
        author: "Ben Nk",
        title: "My awesome post",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa distinctio voluptatem  quas aperiam vitae soluta possimus ipsum provident commodi tenetur eaque repellat iusto, reiciendis rem excepturi suscipit. Itaque, praesentium facere dicta eligendi atque voluptatum quo. Asperiores error, exercitationem dolores animi veniam nam minus et dicta repellendus aut labore quidem?",
        thumbnailLink: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
      }
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
