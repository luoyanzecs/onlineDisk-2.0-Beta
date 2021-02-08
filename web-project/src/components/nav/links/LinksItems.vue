<template>
  <li>
    <router-link :to="url" @click.native="notice">{{tile}}</router-link>
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
    },
    methods: {
      notice() {
        this.$emit('fold');
      }
    }
  }
</script>

<style scoped>

</style>