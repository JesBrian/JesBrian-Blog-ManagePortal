<template>
  <div class='IndexPage'>
    Index Page <br/>
    <router-link to='/edit/1322'> 跳转 EditPage </router-link>
  </div>
</template>

<script lang='ts'>
  import {Vue, Component} from 'vue-property-decorator'

  @Component

  export default class IndexPage extends Vue {
  };
</script>

<style lang='less' scoped>
  @import './IndexPage.less';
</style>
