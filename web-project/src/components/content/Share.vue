<template>
  <div class="share-container">
    <div class="share-header"><h2>content : </h2></div>
    <div v-if="$store.state.isLogin"><h1>please login</h1></div>
    <div v-else v-for="file in files" class="file-item ">
      <span @click="showOperate(file)">{{file}}</span>
      <img :ref="file" @click="download(file.name, $event.target)"  src="../../assets/icon/xiazai.png"/>
    </div>
  </div>
</template>

<script>
  import {request} from "@/api";

  export default {
    name: "Share",
    data() {
      return {
        files:['filename1', 'filename2'],
      }
    },
    mounted() {
      request({}).then(res => {}).catch(err => {})
    },
    methods: {
      download(file, e) {
        e.style = "right: 3px";
        setTimeout(() => e.style = "right: -1.3rem;", 4000);
        request({}).then(res => {}).catch(err => {});
      },
      showOperate(ref) {
        this.$refs[ref][0].style = 'right: 3px';
        setTimeout(() => this.$refs[ref][0].style = 'right: -1.3rem;', 4000);
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/content/share/share.css";
</style>