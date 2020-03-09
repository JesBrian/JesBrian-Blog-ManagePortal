<template>
  <div class='FunnyPage'>
    Funny Page <br/>
    123456789
    <router-link to='/'>跳转 IndexPage</router-link>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class FunnyPage extends Vue {

    mounted () {
      this.axios.get('https://api.jisuapi.com' + '/iqa/query?appkey=cad4abdb2be74cbf&question=杭州天气')
      .then(response => (console.log(response)))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
    }
  };
</script>

<style lang='less' scoped>
  @import 'FunnyPage.less';
</style>
