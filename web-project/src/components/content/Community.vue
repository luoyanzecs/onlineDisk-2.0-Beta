<template>
  <div class="community-container">
    <div v-if="$store.state.isLogin"><h1>please login</h1></div>
    <div v-else>
      <div class="community-edit">
        <img @click="toggleEditor" src="../../assets/icon/xuanze.png"/>
      </div>
      <div v-for="(item, itemIndex) in msg" class="community-item">
        <h2 class="community-header">
          #{{itemIndex}}  {{item.authorId}} <span>{{item.time}}</span>
        </h2>
        <p class="community-text">{{item.body}}</p>
        <div v-for="(res, resIndex) in item.response" class="community-res">
          <div>
            <span>{{res.id}} </span>
            <span>{{res.time}} : </span>
          </div>
          <p>{{res.context}}</p>
        </div>
        <div class="split-line"></div>
      </div>
    </div>
    <div class="text-input" ref="card" >
      <img @click="toggleEditor" src="../../assets/icon/down.png"/>
      <textarea type="text" v-model="inputContext"> </textarea>
      <div class="pub-btn" @click="publish" ref="spanBorder">
        <span ref="publishBtn">OK</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {request} from "@/api";

  export default {
    name: "Community",
    data() {
      return {
        msg: [
          {time: '2021年2月5日 08:12 ', authorId: 'authorId', body: '灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过分析，因为我给p标签的样式设置了宽度24px和高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因为p标签放不下那么多的字而换行，但，实际上，p标签的所占的空间就是由给他设置的宽度和高度组成的地方，所以，img标签认为第一行文字下面就是一片空的地方，他可以使用这块地方，所以，就出现在第二行字的上面了', response: [{id: 'user1', time: '2021年2月5日 08:12', context: '灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，'},{id: 'user2', time:'2021年2月5日 08:12', context: '灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，'}]},
          {time: '2021年2月5日 08:12 ', authorId: 'authorId', body: '灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过分析，因为我给p标签的样式设置了宽度24px和高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因为p标签放不下那么多的字而换行，但，实际上，p标签的所占的空间就是由给他设置的宽度和高度组成的地方，所以，img标签认为第一行文字下面就是一片空的地方，他可以使用这块地方，所以，就出现在第二行字的上面了', response: [{id: 'user1', time: '2021年2月5日 08:12', context: '灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，'},{id: 'user2', time:'2021年2月5日 08:12', context: '灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，'}]},
          {time: '2021年2月5日 08:12 ', authorId: 'authorId', body: '灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过分析，因为我给p标签的样式设置了宽度24px和高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因为p标签放不下那么多的字而换行，但，实际上，p标签的所占的空间就是由给他设置的宽度和高度组成的地方，所以，img标签认为第一行文字下面就是一片空的地方，他可以使用这块地方，所以，就出现在第二行字的上面了', response: [{id: 'user1', time: '2021年2月5日 08:12', context: '灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，'},{id: 'user2', time:'2021年2月5日 08:12', context: '灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，'}]},
        ],
        isEdit: false,
        inputContext: 'Write your idea...',
      }
    },
    mounted() {
      request({}).then(res => {}).catch(err => {});
    },
    methods: {
      toggleEditor() {
        let body = document.body || document.documentElement ;
        if (body.clientWidth <= 768) {
          !this.isEdit ? (body.style.overflow='hidden', this.$refs.card.style.tansform = 'translateY(0)')
            : (body.style.overflow='', this.$refs.card.style.transform = 'translateY(50vh)');
        } else {
          this.$refs.card.style.transform =
            !this.isEdit ? 'translateX(0)' : 'translateX(101%)';
        }
        this.isEdit = !this.isEdit;
      },
      publish() {
        let btn = this.$refs.publishBtn;
        btn.style = 'color: #44bd32';
        if (document.body.clientWidth <= 768) {
          setTimeout(() => this.$refs.spanBorder.style = 'border: solid 1px rgba(76, 209, 55, 1);', 1000);
        }
        setTimeout(() => this.toggleEditor(), 2500);
        setTimeout(() => {
          btn.style = 'color: ';
          this.$refs.spanBorder.style = 'border: solid 1px rgba(76, 209, 55, 0)'}, 3000)
        request({}).then(res => {}).catch(err => {});
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/content/community/community.css";
</style>