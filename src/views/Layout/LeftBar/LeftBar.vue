<template>
    <div class="LeftBar">
        <pre v-text="$attrs"/>
        LeftBar
    </div>
</template>

<script>
    export default {
        props: {
        },
    };
</script>

<style lang="less" scoped>
    @import './LeftBar.less';
</style>
