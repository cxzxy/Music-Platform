<template>
  <div class="userInfo">
    <div class="input">
      <div class="avatar">
        <el-upload class="avatar-uploade" action="" :http-request="httpRequest">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <div v-else class="el-icon-plus"></div>
        </el-upload>
      </div>
      <div class="frame">
        <el-input v-model="userName" placeholder="用户名"></el-input>
      </div>
      <div class="frame">
        <el-input v-model="age" placeholder="年龄"></el-input>
      </div>
      <div class="frame">
        <el-radio-group v-model="sex">
          <el-radio label="1">男</el-radio>
          <el-radio label="0">女</el-radio>
          <!-- <el-radio :label="-1">保密</el-radio> -->
        </el-radio-group>
      </div>
      <div class="frame">
        <el-input v-model="hobby" placeholder="爱好"></el-input>
      </div>
    </div>
    <div class="button" @click="save">保&nbsp;&nbsp;&nbsp;&nbsp;存</div>
  </div>
</template>
<script>
import {
  getUserInfo,
  changeUserInfo,
  changeUserAvatar,
} from "network/userInfo";

export default {
  name: "ChangeUserInfo",
  components: {},
  data() {
    return {
      userName: "",
      hobby: "",
      age: 1,
      birthday: "",
      sex: 1,
      base64: "",
      imageUrl: "",
    };
  },
  computed: {},
  methods: {
    httpRequest(params) {
      let file = params.file;
      const formData = new FormData();
      formData.append("img", file);
      changeUserAvatar(formData).then(
        (res) => {
          if (res.code === 200) {
            this.imageUrl = res.data;
          } else {
            this.$message(res.msg);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
    // getFile(file, fileList) {
    //   this.getBase64(file.raw).then((res) => {
    //     this.base64 = res;
    //   });
    // },
    // // 获取图片转base64
    // getBase64(file) {
    //   return new Promise(function (resolve, reject) {
    //     const reader = new FileReader();
    //     let imgResult = "";
    //     reader.readAsDataURL(file);
    //     reader.onload = function () {
    //       imgResult = reader.result;
    //     };
    //     reader.onerror = function (error) {
    //       reject(error);
    //     };
    //     reader.onloadend = function () {
    //       resolve(imgResult);
    //     };
    //   });
    // },
    save() {
      changeUserInfo({
        userName: this.userName,
        age: this.age,
        sex: this.sex,
        hobby: this.hobby,
        avatar: this.imageUrl,
      }).then(
        (res) => {
          this.$message("保存成功");
          this.$router.push("/main/userinfo");
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
  created() {
    getUserInfo().then(
      (res) => {
        if (res.code === 200) {
          this.userName = res.data.userName;
          this.email = res.data.email;
          this.sex = res.data.sex;
          this.id = res.data.id;
          this.imageUrl = res.data.avatar;
          this.hobby = res.data.hobby;
          this.age = res.data.age;
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
  margin-top: 50px;
  margin-left: 270px;
  width: 50%;
  height: 600px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-size: 100px;
  line-height: 150px;
  cursor: pointer;
  text-align: center;
}
.avatar img {
  width: 100%;
  height: 100%;
}
.avatar > div {
  width: 100%;
  height: 100%;
}
.frame {
  width: 300px;
}
.input {
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
