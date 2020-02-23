<template>
  <div class="WindowFrame">
    {{computedMsg}}

    <top-bar/>

    <left-bar/>

    <view-content/>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  import TopBar from './Layout/TopBar/TopBar.vue';
  import LeftBar from './Layout/LeftBar/LeftBar.vue';
  import ViewContent from './Layout/ViewContent/ViewContent.vue';

  @Component({
    components: {
      TopBar, LeftBar, ViewContent
    }
  })

  export default class WindowFrame extends Vue {
    // 初始化数据
    msg = 123;

    // 声明周期钩子
    mounted() {
      this.greet()
    }

    // 计算属性
    get computedMsg() {
      return 'computed ' + this.msg
    }

    // 方法
    greet() {
      alert('greeting: ' + this.msg)
    }
  }
</script>

<style lang="less" scoped>
</style>
