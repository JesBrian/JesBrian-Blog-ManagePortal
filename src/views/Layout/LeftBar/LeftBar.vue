<template>
  <div class='LeftBar'>
    <pre v-text='$attrs'/>
    LeftBar
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator'

  @Component

  export default class LeftBar extends Vue {
  };
</script>

<style lang='less' scoped>
  @import './LeftBar.less';
</style>
