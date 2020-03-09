<template>
    <div class='ErrorPage'>
        This application has encountered a critical error: FATAL ERROR<hr />
        <router-link to='/' >Restart !</router-link>
    </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class ErrorPage extends Vue {
  };
</script>
