<template>
  <div class='ViewContent'>
    <router-view class="viewPage" />
  </div>
</template>

<script lang='ts' >
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class ViewContent extends Vue {
  };
</script>

<style lang='less' scoped>
  @import 'ViewContent.less';
</style>
