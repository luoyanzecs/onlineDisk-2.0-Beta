<template>
  <header ref="header">
    <div class="nav">
      <Logo></Logo>
      <Menu ref="menu" @menuMethod="doMenuSwitchMethod"></Menu>
      <Links ref="links">
        <li>
          <a @click="linkClick" href="https://github.com/luoyanzecs/onlineDisk-2.0-Beta" target="_blank">github</a>
        </li>
        <LinksItems msg="file" url="/file" @fold="linkClick"></LinksItems>
        <LinksItems msg="share" url="/share" @fold="linkClick"></LinksItems>
        <LinksItems msg="community" url="/community" @fold="linkClick"></LinksItems>
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
    },
    methods: {
      linkClick() {
        this.$refs.menu.switchMenu();
      },
      doMenuSwitchMethod(data) {
        let header = this.$refs.header,
            menu = this.$refs.menu.$refs.logo;
        (this.$refs.menu.openFlag = !data) ?
          (header.style.height = "262px", menu.style.transform = "rotate(90deg)")
          : (header.style.height = "62px", menu.style.transform = "rotate(0)");
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/nav/nav.css";
</style>