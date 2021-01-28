<template>
  <a href="/home" class="nav-logo">
    <span>d</span>
    <span>i</span>
    <span>s</span>
    <span id="spanK">k</span>
  </a>
</template>

<script>
  export default {
    name: "logo",
    mounted() {
      let k = document.getElementById('spanK');
      k.style.color = "#44bd32";
    }
  }
</script>

<style scoped>
  @import "../../assets/css/nav/logo.css";
</style>