<template>
  <div v-if="!$store.state.isLogin" class="chat-container">
      <div>
        <img @click="toggle" src="../../assets/icon/xinxi.png" style="width: 2.5rem; height: 2.5rem"/>
      </div>
      <Card ref="card">
        <div>
          <img  @click="toggle" src="../../assets/icon/down.png"/>
        </div>
        <div class="record">
          <div v-for="record in records">
            <span>{{record.time}}</span>
            <div></div>
            <span>{{record.ctx}}</span>
          </div>
        </div>
        <div class="msg-send">
          <textarea type="text" v-model="sendCtx">{{sendCtx}}</textarea>
          <span @click="sendMsg">GO</span>
        </div>
      </Card>
  </div>
</template>

<script>
  import {request} from "@/api";
  import Card from "@/components/common/Card";

  export default {
    name: "Chat",
    data() {
      return {
        records: [
          {id:'admin', time:'2021年2月5日 08:12', ctx: 'hello'},
          {id:'user', time:'2021年2月5日 08:12', ctx: 'hello'}
        ],
        sendCtx: '...',
        isShow: false
      }
    },
    components: {
      Card,
    },
    methods: {
      toggle() {
        this.$refs.card.toggle();
      },
      sendMsg() {
        request({}).then(res => {}).catch(err => {});
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/content/chat/chat.css";
</style>