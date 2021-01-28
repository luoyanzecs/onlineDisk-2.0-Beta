<template>
  <div class="file-container">
    <div v-if="$store.state.logStatus">
      <h1>Please login</h1>
    </div>
    <div v-else>
      <div class="file-nav">
        <div>
          <img src="../../assets/icon/shangchuan.png"/>
        </div>
      </div>
      <div v-for="item in items">
        <div>
          <!--<span @click="open(item.ser)" class="fold"><img src="../../assets/icon/zhankai.png"/></span>-->
          <span @click="open(item.ser)" class="fold">{{item.ser}}</span>
          <div :id="item.ser">
            <div v-for="file in item.files" class="file-name">
              <span>{{file}} </span>
              <span><img src="../../assets/icon/xiazai.png" /></span>
              <span><img src="../../assets/icon/shanchu.png" /></span>
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

  export default {
    name: "File",
    data() {
      return {
        items: [
          {ser: 'A', files: ['filename1aaaaaaaaaaaaaaaa', 'filename2', '3']},
          {ser: 'B', files: ['filename3', 'filename4']},
        ],
      }
    },
    methods: {
      open(ser) {
        let id = document.querySelector('#' + ser);
        id.style.display =
          (id.style.display == '') || (id.style.display == 'block') ? 'none' : 'block'
      },
      getFiles() {
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
      uploadFiles() {
        //check use rsa or not {$store.state.isRsa}. encryption or not
        //use {$store.state.RSA_PUBLIC_KEY_CLIENT} to encrypt,
      },
      getRsaPublicKeyClient() {

      },
      sendRsaPublicKeyServer() {

      }
    },
    mounted() {
      //asynchronous get RSA_PUBLIC_KEY_CLIENT,
      // and create RSA_PUBLIC_KEY_SERVER, RSA_PRIVATE_KEY_SERVER with vuex actions,
      request()
    }
  }
</script>

<style scoped>
  @import "../../assets/css/content/file/file.css";
</style>