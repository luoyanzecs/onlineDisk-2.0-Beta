<template>
  <div class="card-layout" ref="container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Card",
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      toggle() {
        let body = document.body || document.documentElement ;
        console.log(this.isShow);
        if (body.clientWidth <= 768) {
          body.style.overflow = !this.isShow ? 'hidden' : '';
          this.$refs.container.style.transform = !this.isShow ? 'translateY(0)' : 'translateY(101%)';
        } else {
          this.$refs.container.style.transform = !this.isShow  ? 'translateX(0)' : 'translateX(101%)';
        }
        this.isShow = !this.isShow;
      },
    }
  }
</script>

<style scoped>
  @import "../../assets/css/card-common.css";
</style>