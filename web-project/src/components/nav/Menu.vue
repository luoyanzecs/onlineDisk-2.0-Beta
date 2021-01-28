<template>
  <div class="menu">
    <div @click="open">
      <img id="menuLogo" src="../../assets/icon/caidan.png" alt="menu">
    </div>
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
      open() {
        let header = document.querySelector('header');
        let menu = document.querySelector('#menuLogo');
        let collapse = document.querySelector('.collapse');
        if (!this.openFlag) {
          header.style.height = "262px";
          menu.style.transform = "rotate(90deg)";
          collapse.style.display = "block";
        } else {
          header.style.height = "62px";
          menu.style.transform = "rotate(0)";
          setTimeout(() => {
            collapse.style.display = "none";
          },1000);
        }
        this.openFlag = !this.openFlag;;
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/nav/menu.css";
</style>