<template>
  <div id="app">
    <Nav></Nav>
    <Chat ref="chat"></Chat>
    <ContentView></ContentView>
  </div>
</template>
<script>
  const Nav =  () => import("@/views/Nav");
  const ContentView = () => import("@/views/ContentView");

  import Chat from "@/components/chat/Chat";

  export default {
    name: 'App',
    components: {
      Nav, ContentView, Chat,
    }
  }
</script>
<style>
  #app {
    height: 100vh;
    width: 100vw;
  }

</style>
