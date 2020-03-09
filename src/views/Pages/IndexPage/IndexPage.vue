<template>
  <div class='IndexPage'>
    Index Page <br/>
    <router-link to='/edit/1322'> 跳转 EditPage </router-link>

    <jes-button @onClick="testClick('gg')" >
      1234
    </jes-button>

    <jes-notification @onClick="testClick" @onClose="testClose" title="title" message="message" />
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class IndexPage extends Vue {

    testClick (val: string = '') {
      console.log(val);
    }

    testClose () {
      console.log('testClose');
    }
  };
</script>

<style lang='less' scoped>
  @import './IndexPage.less';
</style>
