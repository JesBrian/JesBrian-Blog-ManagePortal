<template>
  <div id='App' class='App'>
    <top-bar />
    <left-bar />
    <view-content />
  </div>
</template>

<script lang='ts' >
  import { Vue, Component } from 'vue-property-decorator'

  import TopBar from './views/Layout/TopBar/TopBar.vue'
  import LeftBar from './views/Layout/LeftBar/LeftBar.vue'
  import ViewContent from './views/Layout/ViewContent/ViewContent.vue'

  @Component({
    components: {
      TopBar, LeftBar, ViewContent
    }
  })

  export default class WindowFrame extends Vue {
  }
</script>

<style lang='less' scoped>
</style>
