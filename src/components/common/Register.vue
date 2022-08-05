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
      <div class="send">
        <el-button type="info" icon="el-icon-message" circle @click="sendMessage"></el-button>
      </div>
      <div class="code">
        <el-input v-model="code" placeholder="验证码"></el-input>
      </div>
    </div>
    <div class="login">
      <div @click="register">注册</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Register",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      code: "",
      userName: ""
    //   state: ""
    };
  },
  methods: {
    sendMessage(){
        axios({
            method: 'GET',
            url: 'http://47.103.198.84:8080/codes/sendVerificationCod',
            params: {email:this.email}
        }).then(
            res=>{
                alert(res.msg)
            },
            err=>{
                console.log("请求失败")
            }
        )
    },
    register(){
        // axios({
        //     method: 'GET',

        // })
    }
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
.send {
  position: absolute;
}
.username {
    top: 70px;
    left: 15%;
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
    left: 70%
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
    color:#e0a6b8;
}
</style>
