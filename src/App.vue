<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import LoginRegister from "components/common/LoginRegister.vue";
import Main from "views/main/Main.vue";
import login from "components/common/Login.vue";
import Register from "components/common/Register.vue";

export default {
  name: "App",
  components: {
    Main,
    login,
    Register,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
