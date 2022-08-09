<template>
  <div class="top-container">
    <div class="logo">
        <span class="el-icon-headset"></span>
        <span class="music">Music</span>
    </div>
    <div class="search">
      <el-col :span="22">
        <el-autocomplete
          class="inline-input"
          v-model="search"
          placeholder="搜索"
          :trigger-on-focus="false"
          prefix-icon="el-icon-search"
          resize="vertical"
        ></el-autocomplete>
      </el-col>
    </div>
    <div class="user">
      <el-col :span="12">
        <el-dropdown placement="top">
          <el-avatar
            icon="el-icon-user-solid"
            class="el-dropdown-link"
          ></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <div @click="toLogin" v-if="!$store.state.user">
              <el-dropdown-item icon="el-icon-plus" >登录/注册</el-dropdown-item>
            </div>
            <!-- <div @click="toRegister">
              <el-dropdown-item icon="el-icon-plus" v-if="!$store.state.user">注册</el-dropdown-item>
            </div> -->
            <div @click="toUserInfo" v-if="$store.state.user">
              <el-dropdown-item icon="el-icon-edit">个人资料</el-dropdown-item>
            </div>
            <div v-if="$store.state.user" @click="logOff">
              <el-dropdown-item icon="el-icon-close" >退出登录</el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopBar",
  components: {},
  data() {
    return {
      search: "",
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    // toRegister() {
    //   this.$router.push("/register");
    // },
    toUserInfo() {
      this.$router.push("/main/userinfo");
    },
    logOff(){
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
        this.$store.state.user=null
        this.$router.push('/login')
        console.log(111)
    }
  },
};
</script>
<style scoped>
.top-container {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: #f9f9f9;
}
.logo {
    position: absolute;
    /* float: left; */
    left: 50px;
    top: 10px;
    width: 100px;
    height: 30px;
    /* background-color: aqua; */
    /* vertical-align: middle; */
}
.el-icon-headset {
    font-size: 30px;
}
.music {
    margin-left: 10px;
}
.user {
  position: absolute;
  right: 100px;
  top: 10px;
}
.search {
  position: absolute;
  right: 200px;
  top: 12px;
}
</style>
