<template>
  <div class="top-container">
    <div class="search">
      <el-col :span="22">
        <el-autocomplete
          class="inline-input"
          v-model="search"
          placeholder="搜索"
          :trigger-on-focus="false"
          suffix-icon="el-icon-search"
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
            <div @click="toLogin">
              <el-dropdown-item icon="el-icon-plus">登录</el-dropdown-item>
            </div>
            <div @click="toRegister">
              <el-dropdown-item icon="el-icon-circle-plus"
                >注册</el-dropdown-item
              >
            </div>
            <div @click="toUser">
              <el-dropdown-item icon="el-icon-edit">个人资料</el-dropdown-item>
            </div>
            <div>
              <el-dropdown-item icon="el-icon-close">退出登录</el-dropdown-item>
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
    toRegister() {
      this.$router.push("/register");
    },
    toUser() {
      this.$router.push("/user");
    },
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
