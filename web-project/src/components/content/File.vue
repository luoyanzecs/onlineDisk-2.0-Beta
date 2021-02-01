<template>
  <div class="file-container">
    <div v-if="$store.state.logStatus">
      <h1>Please login</h1>
    </div>
    <div v-else>
      <UpLoad></UpLoad>
      <div v-for="item in items">
        <div>
          <span @click="unFold(item.ser)" class="fold">{{item.ser}}</span>
          <div :ref="item.ser">
            <div v-for="file in item.files" class="file-name">
              <span>{{file}} </span>
              <span @click="download(file)"><img src="../../assets/icon/xiazai.png"/></span>
              <span @click="deleteFile(item.ser, file)"><img src="../../assets/icon/shanchu.png"/></span>
              <span><img src="../../assets/icon/fenxiang.png"/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {request} from "@/api";
  import UpLoad from "@/components/content/file/UpLoad";

  export default {
    name: "File",
    data() {
      return {
        items: [
          //test data
          {ser: 'A', files: ['filename1------------------------------------', 'filename2', '3']},
          {ser: 'B', files: ['filename3', 'filename4']},
        ],
      }
    },
    components: {
      UpLoad
    },
    mounted() {
      //asynchronous get RSA_PUBLIC_KEY_CLIENT,
      // and create RSA_PUBLIC_KEY_SERVER, RSA_PRIVATE_KEY_SERVER with vuex actions,
      // request()
      this.getFilesList();
    },
    methods: {
      unFold(ser) {
        let style = this.$refs[ser][0].style;
        style.display = (style.display == '') || (style.display == 'block')
          ? 'none' : 'block'
      },
      getFilesList() {
        //check use rsa or not {$store.state.isRsa}. encryption or not
        //if use rsa send {$store.state.RSA_PUBLIC_KEY_SERVER} to server for encryption
        request({
          //url: /file/download/filenames/useRsa?/RSA_PUBLIC_KEY_SERVER
        }).then(res => {
          // if encryption use {$store.state.RSA_PRIVATE_KEY_SERVER} to decrypt.
          // res: "A":["filename1","filename2"],"B":["filename3", "filename4"]
        }).catch(err => {
          //print err info
        })
      },
      download(filename) {

      },
      deleteFile(ser, filename) {

      },
    }
  }
</script>

<style scoped>
  @import "../../assets/css/content/file/file.css";
</style>