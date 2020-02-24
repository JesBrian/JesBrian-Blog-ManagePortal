<template>
    <div class='TopBar' style='-webkit-app-region:drag; top:0; left:0; width:100%; height:54px; display: block; position:fixed; z-index:999; border-radius:0; color:#999; background: #2e3537' >
        <!-- LOGO -->
        <div style="width:auto; height:100%; float:left;">
            <page-link url="/" style="-webkit-app-region:no-drag; float:left; cursor:pointer;">
                <!--<img src="../../../../assets/image/Logo.png" style="width:30px; height:30px; margin:10px 6px 0 13px; float:left;"/>-->
                <span style="font-size:22px; font-weight:700; color:#22e8ff; text-shadow:1.5px 1.5px 6px #30cdff; line-height:52px;">Blog Manage Portal</span>
            </page-link>
        </div>

        <!--用户操作 -->
        <!--<div v-if="$store.state.User.id !== '0'" style="-webkit-app-region:no-drag; height:25px; margin:15px 288px 0 0; float:right; line-height:25px; ">-->
            <!--<page-link url="/user" style="margin:-1px 8px 0 0; float:left;">-->
                <!--<img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:25px; height:24px; padding:2px;" />-->
            <!--</page-link>-->
            <!--<div @click="changeShowContentType('UserOperation')" style="display:inline-block; font-size:18px; cursor:pointer;">-->
                <!--<p class="text-hidden" style="max-width:158px; display:inline-block; color:#CCC;">{{ $store.state.User.username }}</p>-->
                <!--<i style="width:0; height:0; margin:10px 0 0 6px; border-width:6px; border-style:solid; border-color:#999 transparent transparent transparent; float:right;"></i>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div v-else style="-webkit-app-region:no-drag; height:25px; margin:15px 288px 0 0; float:right; line-height:25px; ">-->
            <!--<div @click="changeShowContentType('UserLogin')" style="display:inline-block; font-size:18px; cursor:pointer;">-->
                <!--<img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:25px; margin:-1px 8px 0 0; padding:1.5px; float:left;" />-->
                <!--<p class="text-hidden" style="max-width:108px; display:inline-block; color:#CCC;">请登录</p>-->
                <!--<i style="width:0; height:0; margin:10px 0 0 6px; border-width:6px; border-style:solid; border-color:#999 transparent transparent transparent; float:right;"></i>-->
            <!--</div>-->
        <!--</div>-->

        <!-- 应用设置 & 控制窗口 -->
        <!--<div style="height:50%; top:15px; right:8px; position:absolute; z-index:9; color:#DDD;">-->
            <!--<i @click="changeShowContentType('ChooseTheme')" class="mh-if theme" style="-webkit-app-region:no-drag; margin:0 8px; font-size:21px;"></i>-->
            <!--<i @click="changeShowContentType('MessageContent')" class="mh-if feedback" style="-webkit-app-region:no-drag; margin:0 8px; font-size:23px;"></i>-->
            <!--<page-link url="/config" class="mh-if gear" style="-webkit-app-region:no-drag; margin:0 8px; color:#DDD; font-size:23px;"></page-link>-->
            <!--<i style="margin:0 8px; padding:8px 0 5px; border-right:2px solid #222;"></i>-->
            <!--<i @click="atest" class="mh-if lessen" style="-webkit-app-region:no-drag; margin:0 8px; font-size:23px;"></i>-->
            <!--<i @click="showMiniView" class="mh-if enlarge" style="-webkit-app-region:no-drag; margin:0 8px; font-size:23px;"></i>-->
            <!--<i @click="closeWindow" class="mh-if close" style="-webkit-app-region:no-drag; margin:0 8px; font-size:23px;"></i>-->
        <!--</div>-->
    </div>
</template>

<script lang='ts' >
  import { Vue, Component } from 'vue-property-decorator'

  @Component

  export default class TopBar extends Vue {
  };
</script>

<style lang='less' scoped>
    @import './TopBar.less';
</style>
