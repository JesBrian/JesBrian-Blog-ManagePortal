<template>
  <div class='EditPage'>
    Edit Page <br/>
    <router-link to='/'>跳转 IndexPage</router-link>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class EditPage extends Vue {
    created () {
      console.log('EditPage - created')
    }
  };
</script>

<style lang='less' scoped>
  @import './EditPage.less';
</style>
