<template>
  <h1> A single user with ID {{ $route.params.id }} </h1>
</template>

<script>
export default {

  layout: 'users',

  // This validate method is run by nuxt just before rendering this page
  // It can be used to validate the route properties
  validate(data) {
    // To test that only numbers are allowed from the ID property
    return /^\d+$/.test(data.params.id);
  },

}
</script>

<style>

</style>
