<template>
  <div class="container row">
    <div class="col-sm-12 col-md-12 col-lg-5 section-1">
      <HomeLogo></HomeLogo>
    </div>
    <div class="col-lg-1"></div>
    <div class="section-2 col-sm-12 col-md-12 col-lg-6">
      <Tip></Tip>
      <div v-if="!$store.state.logStatus" class="sign-layout">
        <SignIn></SignIn>
        <SignUp></SignUp>
      </div>
      <div class="underline"></div>
      <div class="content">
        <p>* The account number and password are
        composed of 6 to 16 digits and letters.</p>
        <p>* Copyright © 2021 luoyanzeze@icloud.com 版权所有 ICP证 : <a href="https://beian.miit.gov.cn/" target="_blank">备案号</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  const Tip = () => import("@/components/content/home/Tip");
  const SignIn = () => import("@/components/content/home/SignIn");
  const SignUp = () => import("@/components/content/home/SignUp");
  const HomeLogo = () => import("@/components/content/home/HomeLogo");

  export default {
    name: "Home",
    components: {
      Tip, SignIn, SignUp,HomeLogo
    }
  }
</script>

<style scoped>
 @import "../../assets/css/content/home/home.css";
</style>