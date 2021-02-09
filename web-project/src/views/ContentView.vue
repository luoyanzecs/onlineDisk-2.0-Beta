<template>
  <div class="container row" >
    <div class="col-lg-2 col-md-1 col-sm-1"></div>
    <div id="content" class="col-lg-8 col-sm-10 col-md-10">
      <router-view></router-view>
    </div>
    <div class="col-lg-2 col-md-1 col-sm-1"></div>
  </div>
</template>

<script>
  export default {
    name: "Content",
  }
</script>

<style scoped>

</style>