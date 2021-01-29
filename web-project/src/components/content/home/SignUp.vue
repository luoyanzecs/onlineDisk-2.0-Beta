<template>
  <div class="sign-container" id="signUp" ref="signUp">
    <img @click="zoom" :src="imgAddr" />
    <div class="sign-slogan">
      <span @click="zoom">SIGN UP</span>
    </div>
    <div :style="styleObject" >
      <div>
        <input class="field" type="text" name="username"
               placeholder="USERNAME" v-model="username" @input="checkName">
      </div>
      <div>
        <input class="field" type="password" name="password"
               placeholder="PASSWORD" v-model="pwd" @input="checkPassword">
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
    name: "SignUp",
    data() {
      return {
        nameFlag: false,
        pwdFlag: false,
        username: '',
        pwd: '',
      }
    },
    computed: {
      imgAddr() {
        return this.$store.state.zoomUp ? require('../../../assets/icon/suoxiao.png')
          : require('../../../assets/icon/fangda.png');
      },
      styleObject() {
        return this.$store.state.zoomUp ? {display: 'flex'} : {display: 'none'};
      },
    },
    methods: {
      zoom() {
        let self, other;
        if (!this.$store.state.zoomUp){
          self = document.querySelector('#signUp');
          other = document.querySelector('#signIn');
          this.$store.commit('switchZoomUp');
          setTimeout (() =>
            this.$store.state.zoomIn && this.$store.commit('switchZoomIn'),1000);
        } else {
          self = document.querySelector('#signIn');
          other = document.querySelector('#signUp');
          this.$store.commit('switchZoomIn');
          setTimeout (() => this.$store.commit('switchZoomUp'), 1000);
        }
        self.style = 'width: 300px; height: 225px;';
        other.style = 'width: 13px; height: 225px;';

        let offset = document.documentElement || document.body || window;
        let scroll = setInterval (() =>
          (offset.scrollTop += 3) || (offset.pageYOffset += 3), 10);
        setTimeout (() => clearInterval(scroll), 1000);

      },
      checkName(event) {
        let regExp = /[A-Z|a-z|0-9]{3,16}/;
        let el = event.target;
        this.nameFlag = regExp.test(this.username) ? el.style.borderBottom = '#4cd137 solid 1px'
          : el.style.borderBottom = '#e84118 solid 1px';
      },
      checkPassword(event) {
        let regExp = /[A-Z|a-z|0-9]{8,16}/;
        let el = event.target;
        this.pwdFlag = regExp.test(this.pwd) ? el.style.borderBottom = '#4cd137 solid 1px'
          : el.style.borderBottom = '#e84118 solid 1px';
      },
      submitMethod() {
        if (this.nameFlag && this.pwdFlag) {
          //send post request to check login;
          request({
            path: '',
            params: {}
          }).then(result => {

          }).catch(err => {

          });
        } else {
          alert("请输入正确信息");
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/content/home/sign/common.css";
</style>