<template>
  <div class="xxx">
    <div class="userInfo">
      <div class="leftbox">
        <div class="avatar"></div>
        <div class="username">{{username}}</div>
        <div class="email">{{email}}</div>
        <button class="change">修改信息</button>
      </div>
      <div class="rightbox">
        <button class="save">保存</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
  components: {},
  data() {
    return {
        username: '用户',
        email: '2460456193@qq.com'
    };
  },
  methods: {},
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
  border: 1px solid pink;
}
.leftbox {
    width: 350px;
    border-right: 1px solid pink ;
}
.leftbox .avatar {
    position: absolute;
    top: 30px;
    left: 120px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid pink;
}
.leftbox .username {
    /* position: absolute; */
    padding-top: 140px;
    /* left: 145px; */
    text-align: center;
}
.leftbox .email {
    text-align: center;
    padding-top: 10px;
}
.change {
    position: absolute;
    bottom: 20px;
    width: 200px;
    height: 50px;
    left: 80px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}
.change:hover {
    background-color: #e07b60;
    color:aliceblue;
}
.rightbox {
    flex: 1;
    position: relative;
}
.save {
    position: absolute;
    bottom: 20px;
    width: 300px;
    height: 50px;
    left: 130px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}
.save:hover {
    background-color: #e07b60;
    color:aliceblue;
}
</style>
