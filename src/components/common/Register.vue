<template>
  <div class="form">
    <div>
      <div class="username">
        <el-input v-model="userName" placeholder="请输入用户名"></el-input>
      </div>
      <div class="password">
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
      </div>
      <div class="email">
        <el-input v-model="email" placeholder="请输入邮箱"></el-input>
      </div>
      <div class="code">
        <el-input v-model="code" placeholder="验证码"></el-input>
      </div>
      <div class="send" v-if="showTime === null">
        <el-button
          type="info"
          icon="el-icon-message"
          circle
          @click="sendMessage"
        ></el-button>
      </div>
      <div class="count-down" v-else>{{ showTime }}</div>
    </div>
    <div class="login">
      <div @click="register">注册</div>
    </div>
    <div class="goLogin">
        <router-link to="/login" class="router-link-active ">已有账号？点击登录</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      code: "",
      userName: "",
      timeCounter: null, //计时器
      showTime: null, //剩余时间
      //   state: ""
    };
  },
  methods: {
    // 倒计时显示处理
    countDownText(s) {
      this.showTime = `${s}s`;
    },
    // 倒计时 60秒 不需要很精准
    countDown(times) {
      const self = this;
      // 时间间隔 1秒
      const interval = 1000;
      let count = 0;
      self.timeCounter = setTimeout(countDownStart, interval);
      function countDownStart() {
        if (self.timeCounter == null) {
          return false;
        }
        count++;
        self.countDownText(times - count + 1);
        if (count > times) {
          clearTimeout(self.timeCounter);
          self.showTime = null;
        } else {
          self.timeCounter = setTimeout(countDownStart, interval);
        }
      }
    },
    sendMessage() {
      axios({
        method: "GET",
        url: "http://47.103.198.84:8080/codes/sendVerificationCod",
        params: { email: this.email },
      }).then(
        (res) => {
        //   this.countDown(60);
          alert(res.msg);
        },
        (err) => {
          console.log("请求失败");
          this.countDown(60);
        }
      );
    },
    register() {
      // axios({
      //     method: 'GET',
      // })
    },
  },
};
</script>
<style scoped>
.form {
  position: relative;
  border-radius: 50px;
  width: 400px;
  height: 400px;
  border: 1px solid pink;
  /* background-color: #781d9e; */
  margin-top: 8%;
  margin-left: 35%;
}
.username,
.email,
.password,
.login,
.code,
.send,
.count-down {
  position: absolute;
}
.username {
  top: 70px;
  left: 15%;
  width: 70%;
}
.email {
  top: 170px;
  left: 15%;
  width: 50%;
}
.password {
  top: 120px;
  left: 15%;
  width: 70%;
}
.send {
  top: 170px;
  left: 70%;
}
.count-down {
  top: 170px;
  left: 70%;
  width: 40px;
  height: 40px;
  border: 1px solid;
  border-radius: 50%;
  background-color: #909399;
  color: aliceblue;
  text-align: center;
  line-height: 38px;
}
.code {
  top: 220px;
  left: 15%;
  width: 35%;
}
.login {
  width: 80px;
  top: 280px;
  background-color: aqua;
  height: 80px;
  text-align: center;
  line-height: 80px;
  border-radius: 50px;
  cursor: pointer;
  color: aliceblue;
  margin-left: 150px;
}
.login:hover {
  color: #e0a6b8;
}
.goLogin {
    position: absolute;
    font-size: 12px;
    top: 340px;
    right: 30px;
}
.router-link-active:hover {
    color:#e0a6b8
}
</style>
