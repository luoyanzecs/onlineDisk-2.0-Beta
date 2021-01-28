<template>
  <div id="app">
    <Nav></Nav>
    <ContentView></ContentView>
  </div>
</template>
<script>
  const Nav =  () => import("@/views/Nav");
  const ContentView = () => import("@/views/ContentView");

  export default {
    name: 'App',
    components: {
      Nav, ContentView
    },
  }
</script>
<style>
  #app {
    height: 100%;
    width: 100vw;
  }
</style>
