<template>
    <div class="top-container">
        <div class="login" @click="goLogin">
            登录
        </div>
        <div class="register" @click="goRegister">
            注册
        </div>
    </div>
</template>
<script>
export default {
   name: 'TopBar',
   components: {
   },
   data() {
      return {
      }
   },
   methods:{
    goLogin(){
        this.$router.push('/login')
    },
    goRegister(){
        this.$router.push('/register')
    }
   }
}
</script>
<style scoped>
.top-container {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    /* background-color: #f9f9f9; */
    background-color: #f9f9f9
    /* background-color: black; */
}
.login {
    position: absolute;
    right: 100px;
    top: 20px;
    cursor: pointer;
}
.login:hover {
    color: #e0a6b8;
}
.register {
    position: absolute;
    right: 50px;
    top: 20px;
    cursor: pointer;
}
.register:hover {
    color: #e0a6b8;
}
</style>
