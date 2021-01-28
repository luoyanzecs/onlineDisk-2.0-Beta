import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logStatus: false,
    username:'',
    password:'',
    zoomIn: false,
    zoomUp: false,
    isRsa : false,
    RSA_PUBLIC_KEY_CLIENT: '',
    RSA_PRIVATE_KEY_SERVER: '',
    RSA_PUBLIC_KEY_SERVER: ''
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
