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
      <div class="code">
        <el-input v-model="code" placeholder="验证码"></el-input>
      </div>
      <div class="codeimg"><img :src="codeUrl" alt=""></div>
    </div>
    <div class="login">
      <div @click="login">登录</div>
    </div>
    <div class="goRegister">
        <router-link to="/register" class="router-link-active ">未有账号？点击注册</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  components: {},
  data() {
    return {
      userName: "",
      password: "",
      code:"",
      codeUrl: ""
    };
  },
  methods: {
    login(){
        axios({
            method: 'POST',
            url: 'http://47.103.198.84:8080/login',
            data: {userName:this.userName,password:this.password,code:this.code}
        }).then(
            res=>{
                if(res.data.code)
                // const token=res.data.token
                // window.localStorage.setItem('token',token)//存储token在浏览器中
                console.log(res)
            },
            err=>{
                console.log("请求失败")
            }
        )
    }
  },
  created(){
    axios.get('http://47.103.198.84:8080/codes/captcha', {responseType: 'blob'}).then(
        res=>{
            this.codeUrl=window.URL.createObjectURL(res.data)
        }
    )
  }
};
</script>
<style scoped>
.form {
  position: relative;
  border-radius: 50px;
  width: 400px;
  height: 400px;
  border: 1px solid pink;
  margin-top: 8%;
  margin-left: 35%;
}
.username,
.password,
.login,
.code,
.codeimg {
  position: absolute;
}
.username {
  top: 80px;
  left: 15%;
  width: 70%;
}
.password {
  top: 140px;
  left: 15%;
  width: 70%;
}
.code {
  top: 200px;
  left: 15%;
  width: 35%;
}
.codeimg {
    top: 200px;
    left: 55%;
    border: none
}
.login {
  width: 80px;
  margin-top: 270px;
  background-color: #409eff;
  height: 80px;
  text-align: center;
  line-height: 80px;
  border-radius: 50%;
  cursor: pointer;
  color: aliceblue;
  margin-left: 150px;
}
.login:hover {
    color:#e0a6b8;
}
.goRegister {
    position: absolute;
    font-size: 12px;
    top: 340px;
    right: 30px;
}
.router-link-active:hover {
    color:#e0a6b8
}
</style>
