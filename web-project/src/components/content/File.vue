<template>
  <div class="file-container">
    <div v-if="$store.state.logStatus">
      <h1>Please login</h1>
    </div>
    <div v-else>
      <UpLoad :current-dir="currentDir"></UpLoad>

      <div>
        <img class="img-header" src="../../assets/icon/wenjianjia.png"/>
        <span class="dir-layout" v-for="(dir, index) in currentDir" @click="dispatchDir(index)">
          {{dir}}
          <span v-if="index === currentDir.length - 1">:</span>
          <span v-else>/</span>
        </span>
      </div>

      <div class="split-line"></div>

      <div v-for="(item, itemIndex) in items">
        <div>
          <span @click="unFold(item.ser)" class="fold">{{item.ser}}</span>


          <div :ref="item.ser">

            <div v-for="(file, fileIndex) in item.files" class="file-item">

              <span v-if="file.isDir" @click="getFilesList(file.name)">
                <img src="../../assets/icon/wenjianjia.png"/>
              </span>

              <span v-else @click="getFilesList(file.name)" style="width: 1.3rem ; height: 1.3rem">
              </span>

              <span class="file-font">{{file.name}} </span>

              <div class="operate">
                <span @click="download(file.name, file.isDir)">
                  <img class="img-margin" src="../../assets/icon/xiazai.png"/>
                </span>
                <span @click="deleteFile(file.name, file.isDir, itemIndex, fileIndex)">
                  <img class="img-margin" src="../../assets/icon/shanchu.png"/>
                </span>
                <span @click="shareFile(file.name, file.isDir)">
                  <img class="img-margin" src="../../assets/icon/fenxiang.png"/>
                </span>
              </div>

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
          {ser: 'A', files: [{name: 'filename1', isDir: true}, {name: 'filename2', isDir: false}, {name: '333333', isDir: false}]},
          {ser: 'B', files: [{name: '333333', isDir: false}, {name: '44444', isDir: false}]},
        ],
        currentDir: ['home', 'test']
      }
    },
    components: {
      UpLoad
    },
    mounted() {
      //asynchronous get RSA_PUBLIC_KEY_CLIENT,
      // and create RSA_PUBLIC_KEY_SERVER, RSA_PRIVATE_KEY_SERVER with vuex actions,
      // request()
      this.getFilesList('home');
    },
    methods: {
      dispatchDir(index){
        let dir = '';
        for (let i = 0; i <= index; i++) {
          dir += '/' + this.currentDir[i];
        }
        this.getFilesList(dir);
      },
      unFold(ser) {
        let style = this.$refs[ser][0].style;
        style.display = (style.display === '') || (style.display === 'block')
          ? 'none' : 'block'
      },
      getFilesList(dir) {
        request({
          //url: /file/download/home
        }).then(res => {
          // if encryption use {$store.state.RSA_PRIVATE_KEY_SERVER} to decrypt.
          // res: "A":["filename1","filename2"],"B":["filename3", "filename4"]
          this.items = JSON.parse(res.data);
        }).catch(err => {
          //print err info
        })
      },
      shareFile(filename, isDir){

      },
      download(filename, isDir) {

      },
      deleteFile(filename, isDir, itemIndex, fileIndex) {
        this.items[itemIndex].files.splice(fileIndex, 1);
        if (this.items[itemIndex].files.length === 0) {
          this.items.splice(itemIndex, 1);
        }
        request({

        }).then(res => {

          // if () {
          //   this.items[itemIndex].files.splice(fileIndex, 1);
          //   if (this.items[itemIndex].files.length === 0) {
          //     this.items.splice(itemIndex, 1);
          //   }
          // } else {
          //   alert('wrong in delete');
          // }
        }).catch(err => {
          alert('wrong in delete')
        })
      },
    }
  }
</script>

<style scoped>
  @import "../../assets/css/content/file/file.css";
</style>