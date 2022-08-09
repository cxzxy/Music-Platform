<template>
  <div class="body">
    <div class="login-register">
      <div class="el-icon-back iconfont" @click="goHome"></div>
      <div class="contain">
        <div class="big-box">
          <div class="big-contain">
            <div class="btitle">创建账户</div>
            <div class="bform">
              <input
                type="text"
                placeholder="请输入用户名"
                v-model="userName"
              />
              <!-- <span class="errTips" v-if="existed">* 用户名已经存在！ *</span> -->
              <input
                type="password"
                placeholder="请输入密码"
                v-model="password"
              />
              <input type="email" placeholder="请输入邮箱" v-model="email" />
              <div
                class="el-icon-message message"
                v-if="showTime === null"
                @click="sendMessage"
              ></div>
              <div class="count-down" v-else>{{ showTime }}</div>
              <input
                type="email"
                placeholder="请输入验证码"
                v-model="code"
                style="width: 30%; margin-right: 127px"
              />
            </div>
            <button class="bbutton" @click="Register">注册</button>
          </div>
        </div>
        <div class="small-box">
          <div class="small-contain" key="smallContainLogin">
            <div class="stitle">欢迎回来!</div>
            <p class="scontent">与我们保持联系，请登录你的账户</p>
            <button class="sbutton" @click="goLogin">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendEmailCode, register, verifyEmailCode } from "network/user";
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
    // 倒计时60秒
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
      sendEmailCode({ email: this.email }).then(
        (res) => {
          this.countDown(60);
          //   alert(res.msg);
          console.log(res);
        },
        (err) => {
          console.log("请求失败");
          //   this.countDown(60);
        }
      );
    },
    Register() {
    //   verifyEmailCode({
    //     code: this.code,
    //   }).then(
    //     res=>{
    //         console.log(res)
    //     },
    //     err=>{
    //         console.log(err)
    //     }
    //   ),
        register({
          userName: this.userName,
          password: this.password,
          email: this.email,
          code: this.code
        }).then(
          (res) => {
              if (res.code === 200) {
                const token = res.data.token;
                console.log(token);
                localStorage.setItem("accessToken", token);
                localStorage.setItem("user", this.userName);
                this.$store.commit("login", this.userName);
                // console.log(this.$store.state.user)
                alert("注册成功");
                this.$router.push("/main/home");
              } else {
                alert(res.msg);
              }
            // console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    },
    goLogin() {
      this.$router.push("/login");
    },
    goHome() {
      this.$router.push("/main/home");
    },
  },
};
</script>
<style scoped>
.login-register {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  /* background-color: aqua; */
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
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;
  /* box-shadow: 0 0 3px #f0f0f0, 0 0 6px #f0f0f0; */
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}
.big-box {
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 30%;
  transform: translateX(0%);
  transition: all 1s;
  /* background-color: #1e2229; */
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
  /* padding-top: 10px;; */
}
.bform {
  margin-top: 30px;
  width: 100%;
  height: 70%;
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
  /* border-radius: 10px; */
  /* padding-left: 2em; */
  /* background-color: #f0f0f0; */
}
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
  /* background-color: pink; */
  top: 287px;
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
