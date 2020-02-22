<template>
    <div class="WindowFrame">
        <top-bar/>

        <left-bar/>

        <view-content />
    </div>
</template>

<script>
    import LeftBar from './Layout/LeftBar/LeftBar';
    import TopBar from './Layout/TopBar/TopBar';
    import ViewContent from "./Layout/ViewContent/ViewContent";

    export default {
        components: {ViewContent, TopBar, LeftBar},

        props: {},
    };
</script>

<style lang="less" scoped>
</style>
