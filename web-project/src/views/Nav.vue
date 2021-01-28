<template>
  <header>
    <div class="nav">
      <Logo></Logo>
      <Menu></Menu>
      <Links>
        <LinksItems msg="github" url=""></LinksItems>
        <LinksItems msg="file" url="/file"></LinksItems>
        <LinksItems msg="share" url="/share"></LinksItems>
        <LinksItems msg="community" url="/community"></LinksItems>
      </Links>
    </div>
  </header>
</template>

<script>
  import Menu from "@/components/nav/Menu";
  import Logo from "@/components/nav/Logo";
  import Links from "@/components/nav/Links";
  import LinksItems from "@/components/nav/links/LinksItems";

  export default {
    name: "Nav",
    components: {
      Menu, Logo, Links, LinksItems,
    }
  }
</script>

<style scoped>
  @import "../assets/css/nav/nav.css";
</style>