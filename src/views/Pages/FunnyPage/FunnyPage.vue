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
    created(): void {
      console.log(this.$localForage)
    }
  };
</script>

<style lang='less' scoped>
  @import 'FunnyPage.less';
</style>
