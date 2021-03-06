import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    userId:'',
    password:'',
    zoomIn: false,
    zoomUp: false,
    isRsa : false,
    RSA_PUBLIC_KEY_CLIENT: '',
    ENCRYPT_KEY: ''
  },
  mutations: {
    switchZoomIn(){
      this.state.zoomIn = !this.state.zoomIn;
    },
    switchZoomUp() {
      this.state.zoomUp = !this.state.zoomUp;
    }
  },
  actions: {
  },
  modules: {
  }
})
