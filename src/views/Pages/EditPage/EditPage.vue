<template>
    <div class='EditPage'>
        Edit Page <br/>
        <router-link to='/' >跳转 IndexPage</router-link>
    </div>
</template>

<script lang='ts'>
  import { Vue } from 'vue-property-decorator'

  export default class EditPage extends Vue {
  };
</script>

<style lang='less' scoped>
    @import './EditPage.less';
</style>
