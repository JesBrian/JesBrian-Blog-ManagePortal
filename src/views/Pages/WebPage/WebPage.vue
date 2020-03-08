<template>
  <div class="WebPage">
    <pre v-text="$attrs"/>
  </div>
</template>

<script>
  export default {
    props: {},
  };
</script>

<style lang="less" scoped >
  @import "WebPage.less";
</style>
