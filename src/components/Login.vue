<template>
  <div class="login-register">
    <div class="el-icon-back iconfont" @click="goHome"></div>
    <div class="contain">
      <div class="big-box">
        <div class="big-contain">
          <div class="btitle">账户登录</div>
          <div class="bform">
            <input type="text" placeholder="请输入用户名" v-model="userName" />
            <input
              type="password"
              placeholder="请输入密码"
              v-model="password"
            />
            <input
              type="text"
              placeholder="验证码"
              v-model="code"
              style="width: 25%; margin-right: 160px"
              @keyup.enter="Login"
            />
            <div class="img"><img :src="codeUrl" alt="" /></div>
            <div class="icon el-icon-refresh" @click="reFresh"></div>
            <div></div>
            <div></div>
            <button class="bbutton" @click="Login">登录</button>
          </div>
        </div>
      </div>
      <div class="small-box">
        <div class="small-contain" key="smallContainRegister">
          <div class="stitle">你好，朋友!</div>
          <p class="scontent">开始注册，和我们一起旅行</p>
          <button class="sbutton" @click="goRegister">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, getCode } from "network/user.js";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      userName: "",
      password: "",
      code: "",
      codeUrl: "",
      randomCode: "",
    };
  },
  methods: {
    Login() {
      const self = this;
      login({
        userName: self.userName,
        password: self.password,
        code: self.code,
        codeId: this.randomCode,
      }).then(
        (res) => {
          console.log(res);
          if (res.code === 200) {
            const token = res.data.token;
            console.log(token);
            localStorage.setItem("accessToken", token);
            localStorage.setItem("user", self.userName);
            this.$store.commit("login", self.userName);
            this.$message("登录成功");
            this.$router.push("/main/home");
          } else if (res.code === 513) {
            this.$message("账号或密码错误");
          } else {
            this.$message(res.msg);
          }
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    },
    goRegister() {
      this.$router.push("/register");
    },
    goHome() {
      this.$router.push("/main/home");
    },
    reFresh() {
      this.randomCode = Math.random().toString(16).substring(3);
      getCode("blob", { codeId: this.randomCode }).then((res) => {
        this.codeUrl = window.URL.createObjectURL(res);
      });
    },
  },
  created() {
    this.randomCode = Math.random().toString(16).substring(3);
    getCode("blob", { codeId: this.randomCode }).then((res) => {
      this.codeUrl = window.URL.createObjectURL(res);
    });
  },
};
</script>
<style scoped>
.login-register {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-size: 100%;
}
.iconfont {
  position: absolute;
  font-size: 130px;
  font-weight: 700;
  color: #38a9ab;
  top: 70px;
  left: 150px;
  cursor: pointer;
}
.contain {
  width: 60%;
  height: 60%;
  position: relative;
  top: 50%;
  left: 50%;
  background: transparent;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}
.big-box {
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 30%;
}
.big-contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btitle {
  position: absolute;
  top: 50px;
  left: 260px;
  font-size: 24px;
  font-weight: 600;
  color: rgb(57, 167, 176);
}
.bform {
  margin-top: 80px;
  width: 100%;
  height: 90%;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.bform input {
  width: 50%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #1e2229;
  outline: none;
}
.icon,
.img,
.message,
.count-down {
  position: absolute;
  right: 200px;
  font-size: 30px;
  cursor: pointer;
  top: 305px;
}
.count-down {
  top: 300px;
}
.img {
  top: 255px;
}
.icon {
  right: 150px;
  top: 263px;
}
.icon:hover {
  color: cadetblue;
}
.bbutton {
  width: 20%;
  height: 40px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: rgb(57, 167, 176);
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}
.small-box {
  width: 30%;
  height: 100%;
  background: linear-gradient(135deg, rgb(57, 167, 176), rgb(56, 183, 145));
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  transition: all 1s;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}
.small-contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stitle {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}
.scontent {
  font-size: 0.8em;
  color: #fff;
  text-align: center;
  padding: 2em 4em;
  line-height: 1.7em;
}
.sbutton {
  width: 60%;
  height: 40px;
  border-radius: 24px;
  border: 1px solid #fff;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.big-box.active {
  left: 0;
  transition: all 0.5s;
}
.small-box.active {
  left: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  transform: translateX(-100%);
  transition: all 1s;
}
</style>
