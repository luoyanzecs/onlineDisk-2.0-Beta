<template>
  <div class="container row">
    <div class="col-lg-1 col-md-1"></div>
    <div id="content" class="col-lg-10 col-sm-12 col-md-10">
      <router-view></router-view>
    </div>
    <div class="col-lg-1 col-md-1"></div>
  </div>
</template>

<script>
  export default {
    name: "Content"
  }
</script>

<style scoped>

</style>