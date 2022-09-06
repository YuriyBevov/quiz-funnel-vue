<template>
  <div id="app" class="crm">
     <MainLayout />
  </div>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout'
  export default {
    name: "Quiz-app",

    components: {
      MainLayout
    }
  }
</script>

<style lang="scss">
  @import '@/assets/styles/index.scss';

  #app {
    min-height: 100vh;
    overflow: hidden;
    min-height: 100vh;
    width: 100vw;
    background-color: #FAFAFA;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
      width: 0;
      height: 0;
      background-color: transparent;
  }
</style>
