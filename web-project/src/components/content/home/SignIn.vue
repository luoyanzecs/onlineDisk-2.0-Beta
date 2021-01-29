<template>
  <div class="sign-container" ref="signIn" id="signIn">
    <img @click="zoom" :src="imgAddr" />
    <div class="sign-slogan" >
      <span @click="zoom">SIGN IN</span>
    </div>
    <div :style="styleObject" v-show="$store.state.zoomIn">
      <div>
        <input class="field" type="text" name="username"
               placeholder="USERNAME" v-model="username">
      </div>
      <div>
        <input class="field" type="password" name="password"
               placeholder="PASSWORD" v-model="pwd">
      </div>
      <div class="submit">
        <span @click="submitMethod">submit</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {request} from "@/api";

  export default {
    name: "SignIn",
    data() {
      return {
        username: '',
        pwd: '',
      }
    },
    computed: {
      checkInput() {
        return this.username != '' && this.pwd != '';
      },
      imgAddr() {
        return this.$store.state.zoomIn ? require('../../../assets/icon/suoxiao.png')
          : require('../../../assets/icon/fangda.png')
      },
      styleObject() {
        return this.$store.state.zoomIn ? {display: 'flex'} : {display: 'none'}
      },
    },
    methods: {
      zoom() {
        let self, other;
        if (!this.$store.state.zoomIn){
          self = document.querySelector('#signIn');
          other = document.querySelector('#signUp');
          this.$store.commit('switchZoomIn');
          setTimeout (() =>
            this.$store.state.zoomUp && this.$store.commit('switchZoomUp'), 1000);
        } else {
          self = document.querySelector('#signUp');
          other = document.querySelector('#signIn');
          this.$store.commit('switchZoomUp');
          setTimeout (() => this.$store.commit('switchZoomIn'), 1000);
        }
        self.style = 'width: 300px; height: 225px;';
        other.style = 'width: 13px; height: 225px;';

        let offset = document.documentElement || document.body || window;
        let scroll = setInterval (() =>
          (offset.scrollTop += 3) || (offset.pageYOffset += 3), 10);
        setTimeout (() => clearInterval(scroll), 1000);
      },
      submitMethod() {
        if (this.checkInput) {
          //send post request to check login;
          request({
            path: '/check/login/' + this.name + '/' + this.pwd,
          }).then(result => {

          }).catch(err => {

          });
        } else {
          alert("请输入正确信息");
          // console.log('wrong');
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/content/home/sign/common.css";
</style>