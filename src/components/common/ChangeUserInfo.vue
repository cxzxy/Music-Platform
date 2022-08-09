<template>
  <div class="userInfo">
    <div class="input">
      <div><el-avatar icon="el-icon-user-solid" class="avatar"></el-avatar></div>
      <div><el-input v-model="userName" placeholder="用户名"></el-input></div>
      <div>
        <!-- <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="出生日期"
            v-model="birthday"
            style="width: 100%"
          ></el-date-picker>
        </el-col> -->
        <el-input v-model="age" placeholder="年龄"></el-input>
      </div>
      <div>
        <el-radio-group v-model="sex">
          <el-radio label="1">男</el-radio>
          <el-radio label="0">女</el-radio>
          <!-- <el-radio :label="-1">保密</el-radio> -->
        </el-radio-group>
      </div>
      <div><el-input v-model="hobby" placeholder="爱好"></el-input></div>
    </div>
    <div class="button" @click="save">保&nbsp;&nbsp;&nbsp;&nbsp;存</div>
  </div>
</template>
<script>
import { getUserInfo, changeUserInfo } from "network/userInfo";

export default {
  name: "ChangeUserInfo",
  components: {},
  data() {
    return {
      userName: "",
    //   age: "",
      hobby: "",
      avatar: "111",
      age: 1,
      birthday: "",
      sex: "1"
    };
  },
  methods: {
    save() {
      changeUserInfo({
        userName: this.userName,
        age: this.age,
        sex: this.sex,
        hobby: this.hobby,
        avatar: this.avatar,
      }).then(
        (res) => {
          console.log(res);
          this.$router.push("/main/userinfo");
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
  created() {
    // console.log(this.radio)
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
  /* display: flex; */
  margin-top: 100px;
  margin-left: 270px;
  width: 50%;
  height: 600px;
  /* border: 1px solid pink; */
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
}
.avatar {
  width: 150px;
  height: 150px;
  /* border: 1px solid pink; */
  border-radius: 50%;
  margin-left: 90px;
  font-size: 100px;
  line-height: 150px;
  cursor: pointer;
}
.input {
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
input {
  outline: none;
  border: none;
  border-bottom: 1px solid;
  padding-left: 10px;
  font-size: 20px;
  /* text-decoration:none; */
}
.button {
  border-radius: 10px;
  border: 1px solid;
  width: 50%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin: 0 auto;
  margin-top: 30px;
  cursor: pointer;
}
.button:hover {
  background-color: #e07b60;
  color: aliceblue;
}
</style>
