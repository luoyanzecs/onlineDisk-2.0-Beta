<template>
  <li>
    <router-link :to="url">{{tile}}</router-link>
  </li>
</template>

<script>
  export default {
    name: "LinksItems",
    props: {
      msg: {
        type: String,
        default: 'null',
      },
      url: {
        type: String,
        default: '#'
      }
    },
    data() {
      return {
        routeUrl: this.url,
        tile: this.msg,
      }
    }
  }
</script>

<style scoped>

</style>