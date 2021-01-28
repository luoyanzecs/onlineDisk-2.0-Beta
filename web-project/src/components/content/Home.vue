<template>
  <div class="home-layout">
    <div class="blank"></div>
    <HomeLogo></HomeLogo>
    <div class="blank"></div>
    <div class="blank"></div>
    <Tip></Tip>
    <div class="blank"></div>
    <div v-if="!$store.state.logStatus" class="sign-layout">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
    <div class="blank"></div>
    <div class="underline"></div>
    <div class="content"><p>* The account number and password are
      composed of 6 to 16 digits and letters.</p>
    </div>
    <div class="blank"></div>
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
  .sign-layout {
    display: flex;
    flex-direction: row;
    /*height: 225px;*/
  }

  .home-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .underline {
    width: 100%;
    border-bottom: solid 1px #718093;
  }

  .home-layout .content {
    width: 80%;
  }

  .home-layout .content p {
    font-size: 0.6rem;
    margin-top: 0.5rem;
    text-indent: -0.5rem;
    margin-left: 0.5rem;
    color: #718093;
  }
</style>