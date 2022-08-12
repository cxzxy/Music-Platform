<template>
  <div class="top-container">
    <div class="logo">
      <span class="el-icon-headset" style="color: #a0cfff"></span>
      <span class="el-icon-headset" style="color: #e2a65c"></span>
      <span class="el-icon-headset" style="color: #64b871"></span>
    </div>
    <div class="search">
      <el-col :span="22">
        <el-input
          class="inline-input"
          v-model="search"
          placeholder="搜索"
          prefix-icon="el-icon-search"
          resize="vertical"
          @keyup.enter.native="toResult(search)"
        ></el-input>
      </el-col>
    </div>
    <div class="user" ref="user" @mouseenter="showMenu">
      <div class="avatarImg" v-show="avatarUrl">
        <img :src="avatarUrl" alt="" />
      </div>
      <div v-show="!avatarUrl">
        <el-avatar
          icon="el-icon-user-solid"
          class="el-dropdown-link"
        ></el-avatar>
      </div>
      <!-- <el-col :span="12">
        <el-dropdown placement="top">
          
          <el-dropdown-menu slot="dropdown">
            <div @click="toLogin" v-if="!$store.state.user">
              <el-dropdown-item icon="el-icon-plus">登录/注册</el-dropdown-item>
            </div>
            <div @click="toUserInfo" v-if="$store.state.user">
              <el-dropdown-item icon="el-icon-edit">个人资料</el-dropdown-item>
            </div>
            <div v-if="$store.state.user" @click="logOff">
              <el-dropdown-item icon="el-icon-close">退出登录</el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col> -->
    </div>
    <!-- 8.12连夜改bug -->
    <div class="menu" v-show="show" @mouseleave="hide" @mouseenter="showMenu">
      <section></section>
      <div @click="toLogin" class="el-icon-plus" v-if="!$store.state.user">
        登录/注册
      </div>
      <div class="el-icon-edit" v-if="$store.state.user" @click="toUserInfo">
        个人资料
      </div>
      <div class="el-icon-close" v-if="$store.state.user" @click="logOff">
        退出登录
      </div>
      <section></section>
    </div>
  </div>
</template>
<script>
import { getUserInfo } from "network/userInfo";

export default {
  name: "TopBar",
  components: {},
  data() {
    return {
      search: "",
      avatarUrl: "",
      show: false,
    };
  },
  computed: {
    isExist() {
      if (!localStorage.getItem("avatar")) return 0;
      else return 1;
    },
  },
  // watch: {
  //   //监视路由变化
  //   $route: "updateAvatar",
  // },
  methods: {
    showMenu() {
      this.show = true;
    },
    hide() {
      this.show = false;
    },
    toLogin() {
      this.$router.push("/login");
    },
    toUserInfo() {
      this.$router.push("/main/userinfo");
    },
    logOff() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      localStorage.removeItem("avatar");
      this.$store.state.user = null;
      this.$router.push("/login");
    },
    toResult(search) {
      this.$router.push(`/main/result?SongName=${search}`);
    },
    updateAvatar() {
      this.avatarUrl = localStorage.getItem("avatar");
      //   console.log(this.avatarUrl)
    },
  },
  created() {
    // console.log(this.isExist)
    // if (this.isExist) {
    //   this.avatarUrl = localStorage.getItem("avatar");
    // }
    // 登录后自动获取头像信息
    getUserInfo().then(
      (res) => {
        if (res.code === 200 && res.data.avatar) {
          console.log(111);
          this.avatarUrl = res.data.avatar;
          localStorage.setItem("avatar", this.avatarUrl);
        }
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>
<style scoped>
.menu {
  position: absolute;
  right: 70px;
  top: 60px;
  background-color: #fff;
  width: 110px;
  /* border-radius: 20px; */
  text-align: center;
  cursor: pointer;
  font-size: 14px;
}
.menu > div {
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
  width: 100%;
}
.menu > div:hover {
  background-color: rgb(236, 245, 255);
  color: rgb(124, 202, 255);
  /* border-radius: 10px; */
}
.menu > section {
  display: block;
  width: 100%;
  height: 10px;
  background-color: #fff;
  border-bottom-left-radius: 20px;
}
/* .el-icon-plus:hover {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.el-icon-close:hover {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
} */
.top-container {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: #f9f9f9;
}
.el-icon-headset {
  padding-left: 30px;
}
.logo {
  position: absolute;
  left: 50px;
  top: 10px;
  width: 200px;
  height: 30px;
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
  width: 40px;
  height: 40px;
  /* background-color: aqua; */
}

.avatarImg {
  width: 40px;
}
.avatarImg img {
  width: 100%;
  border-radius: 50%;
}
.search {
  position: absolute;
  right: 200px;
  top: 12px;
}
</style>
