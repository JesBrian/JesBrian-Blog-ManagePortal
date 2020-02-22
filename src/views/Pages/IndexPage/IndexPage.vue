<template>
    <div class="IndexPage">
        Index Page <br/>
        <router-link to="/edit/1322" >跳转 EditPage</router-link>
    </div>
</template>

<script>
    export default {
        name: 'IndexPage'
    }
</script>

<style lang="less" scoped>
    @import './IndexPage.less';
</style>