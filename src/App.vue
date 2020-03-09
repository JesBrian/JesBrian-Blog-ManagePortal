<template>
  <div id='App' class='App'>
    <top-bar />
    <left-bar />
    <view-content />
    <div class="BottomBar">
      <div></div>
      <div>
        <router-link to="/funny" >娱乐</router-link>
      </div>
    </div>
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

  html, body, #App {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    border-radius: 10px;
    background: #FFF;
  }


  .BottomBar {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20px;
    padding: 0 20px;
    position: fixed;
    box-sizing: border-box;
    /*background: #2af1fc;*/
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

</style>
