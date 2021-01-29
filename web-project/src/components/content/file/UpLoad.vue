<template>
  <div class="file-nav" ref="fileNav">
    <input type="file" multiple="multiple" @change="selectFile" ref="fileInput"/>
    <div>
      <img @click="switchFold" src="../../../assets/icon/xuanze.png"/>
    </div>
    <div class="file-select" >
      <div @click="triggerFileClick"><span>{{info}}</span></div>
      <div>
        <img src="../../../assets/icon/shangchuan.png" @click="upload"/>
      </div>
    </div>

  </div>
</template>

<script>
  import {request} from "@/api";

  export default {
    name: "UpLoad",
    data() {
      return {
        isFold: true,
        flowInter: '',
        info: 'SELECT FILE',
        data: {}
      }
    },
    mounted() {
      let flow = true;
      this.flowInter = setInterval(() =>
        this.$refs.fileNav.style.width = (flow = !flow) ? '30px' : '35px', 1000);
      setTimeout(() => clearInterval(this.flowInter), 4000);
    },
    methods: {
      switchFold() {
        clearInterval(this.flowInter);
        this.$refs.fileNav.style.width = (this.isFold = !this.isFold) ? '30px' : '260px';
      },
      triggerFileClick() {
        this.$refs.fileInput.click();
      },
      selectFile() {
        const files = this.$refs.fileInput.files;
        this.info = files && files.length == 1 ? files[0].name
          : files[0].name + ' and ' + (files.length - 1) + 'files';
        if (files[0]) {
          let reader = new FileReader();
          reader.readAsBinaryString(files[0]);
          reader.onload = function () {
          }
        }

      },
      upload() {
        //submit files to server
        request({

        }).then(res => {

        }).catch(err => {

        })
      },
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/content/file/file-nav.css";
</style>