<template>
  <Card ref="card">
    <div>
      <img @click="sendStatus('cancel')" src="../../../assets/icon/down.png"/>
    </div>
    <h3>check upload information</h3>
    <div>
      <span>UPLOAD DIR : {{selectDir}}</span>
      <span class="other" @click="isShowBrowse = !isShowBrowse">...</span>
    </div>
    <div>
      <div v-show="isShowBrowse">
        <span>DIR LIST : </span>
        <ul>
          <li v-for="item in dirs" @click="selectDir = item">{{item}}</li>
        </ul>
      </div>
      <span>FILE LIST :</span>
      <ul>
        <li v-for="(file, index) in files" :class="{ wrong: (file.size > 100*1024*1024), correct: (file.size <= 100*1024*1024)}">
          {{index + 1}}. {{file.name}}
        </li>
      </ul>
      <span class="submit" @click="sendStatus('done')">OK</span>
      <p>*Single file size <= 100MB.</p>
    </div>
  </Card>
</template>

<script>
  import {request} from "@/api";
  import Card from "@/components/common/Card";

  export default {
    name: "Notice",
    props: {
      dir: {
        type: String,
        default: '/home'
      },
      files: {}
    },
    components: {
      Card
    },
    data() {
      return {
        isShowBrowse: false,
        dirs: ['/home', '/home/test', '/aaaaa/bbbb/ccccc'],
        fileArr: this.files,
        selectDir: this.dir
      }
    },
    watch: {
      dir() {
        this.selectDir = this.dir;
      }
    },
    created() {
      this.getDirs();
    },
    methods: {
      getDirs(){
        request({

        }).then(res => {

         }).catch(err => {

        });
      },
      sendStatus(sta) {
        let data = {
          uploadDir: this.selectDir,
          status: sta
        };
        this.$emit('noticeCaller', data);
      },
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/content/file/notice.css";
</style>