<template>
  <div class='super-btn-out' @click="onClick" >
    <div class='super-btn-in' >
      <slot />
    </div>
  </div>
</template>

<script lang='ts' >
  import { Vue, Component, Emit } from 'vue-property-decorator'

  @Component
  export default class JesButton extends Vue {

    @Emit('onClick') onClick (event) {
    }
  }
</script>

<style lang='less' scoped >
  @import './JesButton.less';
</style>
