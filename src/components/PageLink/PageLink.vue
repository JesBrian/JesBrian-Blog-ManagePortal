<template>
  <div @click='changePage' class='page-link' >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'PageLink.vue',

    props: {
      url: String
    },

    methods: {
      changePage () {
        // TODO: 判断当前路径和 url 是否相同
        this.$router.push(this.url);
      }
    }
  }
</script>

<style lang='less' scoped >
  @import './PageLink.less';
</style>