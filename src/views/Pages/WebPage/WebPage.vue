<template>
  <div class="WebPage">
    <iframe :src="this.url" />
  </div>
</template>

<script>
  export default {
    props: {
      url: ''
    },
  };
</script>

<style lang="less" scoped >
  @import "WebPage.less";
</style>
