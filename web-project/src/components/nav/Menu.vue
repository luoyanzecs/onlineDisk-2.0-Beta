<template>
  <div class="menu" >
    <img ref="logo" @click="switchMenu" src="../../assets/icon/caidan.png" alt="menu">
  </div>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        openFlag: false,
      }
    },
    methods: {
      switchMenu() {
        this.$emit('menuMethod', this.openFlag);
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/nav/menu.css";
</style>