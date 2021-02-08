<template>
  <div class="file-container">
    <h1 v-if="$store.state.isLogin">Please login ^ ^</h1>
    <div v-else>
      <UpLoad :current-dir="currentDirStr"></UpLoad>
      <div>
        <img class="img-header" src="../../assets/icon/wenjianjia.png"/>
        <span class="dir-layout" v-for="(dir, index) in currentDirArr" @click="dispatchDir(index)">{{dir}}/</span>
      </div>
      <div class="split-line"></div>
      <div v-for="(file, fileIndex) in items" class="file-item">
        <img v-if="file.isDir" @click="getFilesList(currentDirStr + '/' + file.name)" src="../../assets/icon/wenjianjia.png"/>
        <span v-else style="width: 1.3rem ; height: 1.3rem"> </span>
        <span v-if="file.isDir" class="file-font" style="cursor: default">{{file.name}} </span>
        <span v-else class="file-font"  @click="showOperate(file.name)">{{file.name}} </span>
        <div v-if="!file.isDir" class="operate" :ref="file.name" >
          <img @click="download(file.name, file.isDir)"  src="../../assets/icon/xiazai.png"/>
          <img @click="deleteFile(file.name, file.isDir, fileIndex)" src="../../assets/icon/shanchu.png"/>
          <img @click="shareFile(file.name, file.isDir)" src="../../assets/icon/fenxiang.png"/>
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
          {name: 'filename1', isDir: true},
          {name: 'filename2', isDir: false},
          {name: '333333', isDir: false},
          {name: '44444', isDir: false}
        ],
        currentDirArr: []
      }
    },
    computed: {
      currentDirStr() {
        let dir = '';
        this.currentDirArr.forEach(d => dir += '/' + d);
        return dir;
      }
    },
    components: {
      UpLoad
    },
    mounted() {
      this.getFilesList('/home');
    },
    methods: {
      dispatchDir(index) {
        let dir = '';
        for (let i = 0; i <= index; i++) {
          dir += '/' + this.currentDirArr[i];
        }
        this.getFilesList(dir);
      },
      showOperate(name) {
        this.$refs[name][0].style = 'transform: translateX(-75px);';
        setTimeout(() => this.$refs[name][0].style = '', 4000);
      },
      getFilesList(dir) {
        //test
        this.currentDirArr = dir.split('/').filter(item => !(item === ''));
        request({
          //url: /file/download/home
        }).then(res => {
          this.currentDirArr = dir.split('/').filter(o => o !== '');
          this.items = JSON.parse(res.data);
        }).catch(err => {})
      },
      shareFile(filename, isDir) {
        //TODO
        request({}).then(res => {}).catch(err => {})
      },
      download(filename, isDir) {
        //TODO
        request({}).then(res => {}).catch(err => {})
      },
      deleteFile(filename, isDir, fileIndex) {
        //TODO
        request({}).then(res => {}).catch(err => {
          alert('wrong in delete')
        })
      },
    }
  }
</script>

<style scoped>
  @import "../../assets/css/content/file/file.css";
</style>