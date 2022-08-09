<template>
  <div class="xxx">
    <div class="userInfo">
      <div class="leftbox">
        <el-avatar icon="el-icon-user-solid" class="avatar"></el-avatar>
        <div class="username">{{ userName }}</div>

        <button class="back" @click="goHome">回到主页</button>
      </div>
      <div class="rightbox">
        <h2>个人信息</h2>
        <div class="info">
          <el-descriptions title=""  :column=1 class="list">
            <el-descriptions-item label="邮箱" class="item">{{email}}</el-descriptions-item>
            <el-descriptions-item label="性别" class="item">{{getSex()}}</el-descriptions-item>
            <el-descriptions-item label="爱好" class="item">{{hobby}}</el-descriptions-item>
            <el-descriptions-item label="ID" class="item">&nbsp;&nbsp;&nbsp;{{id}}</el-descriptions-item>
            <el-descriptions-item label="年龄" class="item">{{age}}</el-descriptions-item>
            </el-descriptions>
            </div>
        <button class="change" @click="goChange">修改信息</button>
      </div>
    </div>
  </div>
</template>
<script>
import { getUserInfo } from "network/userInfo";

export default {
  name: "UserInfo",
  components: {},
  data() {
    return {
      userName: "tomo1ya",
      email: "2460456193@qq.com",
      age: 1,
      sex: 1,
      hobby: "唱跳rap打篮球",
      avatar: "url",
      id: 123456,
    };
  },
  methods: {
    goChange() {
      this.$router.push("/main/changeuserinfo")
    },
    getSex() {
      if (this.sex == 1) return "男"
      else if (this.sex == 0) return "女"
      else return "保密"
    },
    goHome(){
        this.$router.push("/main/home")
    }
  },
  created() {
    getUserInfo().then(
      (res) => {
        if (res.code === 200) {
          this.userName = res.data.userName;
          this.email = res.data.email;
          this.sex = res.data.sex;
          this.id = res.data.id;
          this.avatar = res.data.avatar;
          this.hobby = res.data.hobby;
          this.age=res.data.age
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
.userInfo {
  position: relative;
  display: flex;
  margin-top: 170px;
  margin-left: 100px;
  width: 80%;
  height: 470px;
  /* border: 1px solid pink; */
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}
.leftbox {
  width: 350px;
  border-right: 1px solid #b3b3b3;
  height: 100%;
}
.leftbox .avatar {
  position: absolute;
  top: 30px;
  left: 120px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 70px;
  line-height: 100px;
  cursor: pointer;
}
.leftbox .username {
  padding-top: 140px;
  text-align: center;
}
.rightbox {
  flex: 1;
  position: relative;
  height: 100%;
}
.change {
  position: absolute;
  bottom: 20px;
  width: 300px;
  height: 50px;
  left: 130px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
.change:hover {
  background-color: #e07b60;
  color: aliceblue;
}
.back {
    position: absolute;
  bottom: 20px;
  width: 230px;
  height: 50px;
  left: 60px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
.back:hover {
  background-color: #e07b60;
  color: aliceblue;
}
h2 {
  padding-top: 20px;
  text-align: center;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  height: 80%;
}
.list {
    display: flex;
      flex-direction: column;
  justify-content: space-between;
  padding-top: 60px;
  height: 70%;
  font-size: 18px;
  margin-left: 100px;
}
</style>
