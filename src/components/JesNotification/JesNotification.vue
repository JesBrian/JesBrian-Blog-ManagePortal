<template>
  <div v-if="!hide" class='JesNotification' @click="onClick" >
    <div v-if="title" >{{title}}</div>
    <div v-if="message" >{{message}}</div>
    <slot />
    <div v-if="closable" class="closeBtn" @click="close" >×</div>
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
    @Prop({default: 10000})
    duration?: number;

    // 关闭按钮
    @Prop({default: true})
    closable?: boolean;

    // 是否展示
    hide: boolean = false;

    // 倒计时
    times: number = this.duration;

    created (): void {
      if (this.times > 0) {
        let timer = setInterval(() => {
          if (this.hide) return clearInterval(timer);
          this.times -= 300;
          if (this.times <= 0) {
            this.hide = true;
            this.onClose();
            clearInterval(timer);
          }
        }, 300);
      }
    }

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

    /**
     * 主动关闭提示
     */
    close (): void {
      this.hide = true;
      this.onClose();
    }
  }
</script>

<style lang='less' scoped >
  @import './JesNotification.less';
</style>
