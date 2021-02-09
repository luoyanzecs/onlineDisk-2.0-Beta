<template>
  <div class="file-nav" ref="fileNav">
    <input type="file" multiple="multiple" @change="selectFile" ref="fileInput"/>
    <p v-if="progress">{{ progress }}%</p>
    <div>
      <img @click="switchFold" src="../../../assets/icon/xuanze.png"/>
    </div>
    <div class="file-select" >
      <div @click="triggerFileClick"><span>{{info}}</span></div>
      <div>
        <img src="../../../assets/icon/shangchuan.png" @click="upload(null)" />
      </div>
    </div>
    <Notice ref="notice" :dir="currentDir" :files="files" @noticeCaller="noticeCallee"></Notice>
  </div>
</template>

<script>
  import {request} from "@/api";
  const Notice = () => import("@/components/content/file/Notice");

  export default {
    name: "UpLoad",
    props: {
      currentDir: {
        type: String,
        default: 'home',
      }
    },
    components: {
      Notice
    },
    data() {
      return {
        isFold: true,
        flowInter: '',
        info: 'SELECT FILE',
        files: null,
        progress: 0,
        isUpload: false,
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
        this.info = files && files.length ? files[0].name
          : files[0].name + ' and ' + (files.length - 1) + 'files';
        this.files = files;
      },
      toggleNotice() {
        this.$refs.notice.$refs.card.toggle();
      },
      noticeCallee(data) {
        this.isUpload = data.status === 'done';
        this.upload(data.uploadDir);
      },
      upload(uploadDir) {
        this.files ? this.toggleNotice() : '';
        if (this.isUpload && uploadDir && this.files) {
          let formData = new FormData();
          formData.append('dir', uploadDir);
          //check file size
          this.files.forEach(file =>
            file.size <= 100*1024*1024 && formData.append('files', file));
          //submit files to server
          request({
            url: '/upload/' + this.$store.state.userId,
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: e => {
              if(e.lengthComputable){
                let complete = ( ((e.loaded / e.total) * 100) | 0);
                this.progress = complete >= 100 ? 0 : complete;
              }
            },
            data: formData
          }).then(res => {
            //TODO
          }).catch(err => {
            //TODO
          });
          this.isUpload = !this.isUpload;
        }
      },
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/content/file/file-nav.css";
</style>