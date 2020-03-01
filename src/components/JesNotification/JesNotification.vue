<template>
  <div class='JesNotification' @click="onClick" >
    <div v-if="title" >{{title}}</div>
    <slot />

    <div v-if="closable" class="closeBtn" >×</div>
  </div>
</template>

<script lang='ts' >
  import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

  @Component
  export default class JesNotification extends Vue {

    // 标题
    @Prop({default: ''})
    title?: string;

    // 提示内容
    @Prop({default: ''})
    message?: string;

    // 显示时间
    @Prop({default: 50000})
    duration?: number;

    // 关闭按钮
    @Prop({default: true})
    closable?: boolean;


    /**
     * 点击 Notification 时的回调函数
     */
    @Emit('onClick') onClick() {
    }

    /**
     * 关闭时的回调函数
     */
    @Emit('onClose') onClose() {
    }
  }
</script>

<style lang='less' scoped >
  @import './JesNotification.less';
</style>
