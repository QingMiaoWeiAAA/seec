<template>
  <div id="app">
    <!-- <MyLogin/> -->
    <router-view />
  </div>
</template>
<script>
// import MyLogin from "@/pages/MyLogin.vue"
export default {
  name:"app",
  components:{
    // MyLogin,
  }
}
</script>
<style>
  #app{
    height:100vh;
    width:100vw;
  }
</style>
