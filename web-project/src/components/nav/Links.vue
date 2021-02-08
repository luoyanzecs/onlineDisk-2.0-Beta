<template>
  <div class="collapse" ref="collapse">
    <ul class="links">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Links"
  }
</script>

<style scoped>
  @import "../../assets/css/nav/links.css";
</style>