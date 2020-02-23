<template>
    <div class='TopBar' style='-webkit-app-region:drag; top:0; left:0; width:100%; height:54px; display: block; position:fixed; z-index:999; border-radius:0; color:#999; background: #2e3537' >
    </div>
</template>

<script lang='ts' >
  import { Vue, Component } from 'vue-property-decorator'

  @Component

  export default class TopBar extends Vue {
  };
</script>

<style lang='less' scoped>
    @import './TopBar.less';
</style>
