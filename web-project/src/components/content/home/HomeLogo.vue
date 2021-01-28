<template>
  <div class="logo-parent">
    <div class="logo-home">
      <article id="logo-article">
        <span>d</span><span>i</span><span>s</span><span>k</span>
      </article>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeLogo",
    mounted() {
      const article = document.querySelector('#logo-article');
      const logoHome = document.querySelector('.logo-home');
      setInterval(function change(){
        logoHome.style.transform = "perspective(900px) rotateY(180deg) rotateX(180deg)";
        article.style.transform ="perspective(900px) rotateY(180deg) rotateX(180deg)";
        setTimeout(() =>{
          logoHome.style.transform = "perspective(900px)";
          article.style.transform = "";
        }, 4000);
        return change
      }(), 8000);
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/content/home/home-logo.css";

  .logo-parent {
    perspective: 900px;
  }
</style>