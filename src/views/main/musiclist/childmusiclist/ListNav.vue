<template>
  <div class="list-nav">
    <div class="head">
      <h2>
        已有歌单({{ lists.length }})
        <span
          @click="addlist"
          class="el-icon-circle-plus-outline iconfont3"
        ></span>
      </h2>
    </div>
    <ul class="list">
      <li
        v-for="(item, index) in lists"
        :key="index"
        @click="toListDetail(item.id, item.title, index)"
      >
        <img :src="require(`assets/img/${index + 1}.jpg`)" alt="" />
        <div class="_list">
          <div class="title">{{ item.title }}</div>
          <div class="num">
            6首<span
              class="el-icon-edit iconfont1"
              @click="editlist($event, item.id)"
            ></span
            ><span
              class="el-icon-delete iconfont2"
              @click="deletelist($event, item.id)"
            ></span>
          </div>
        </div>
      </li>
    </ul>
    <div class="add1" v-show="isAdd">
      <div style="position: relative">
        <div class="header">新建歌单</div>
        <div class="container">
          <div class="name">
            歌单名:<input type="text" v-model="addedListName" />
          </div>
          <div class="button">
            <div @click="add" class="add2">新建</div>
            <div @click="cancelAdd" class="cancel">取消</div>
          </div>
        </div>
      </div>
    </div>
    <div class="edit" v-show="isEdit">
      <div style="position: relative">
        <div class="header">修改歌单信息</div>
        <div class="container">
          <div class="name">
            歌单名:<input type="text" v-model="changedListName" />
          </div>
          <div class="button">
            <div @click="save" class="save">保存</div>
            <div @click="cancelSave" class="cancel">取消</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getMusicList,
  createMusicList,
  deleteMusicList,
  editMusicList,
} from "network/musiclist";

export default {
  name: "ListNav",
  components: {},
  data() {
    return {
      lists: [],
      addedListName: "",
      changedListName: "",
      isEdit: false,
      isAdd: false,
      editedId: "",
      len: 0
    };
  },
  methods: {
    getwww(len){
        this.len=len;
        console.log(this.len)
    },
    toListDetail(Id,Title,index){
        this.$router.push(`/main/musiclist/listdetail?id=${Id}&title=${Title}&index=${index}`)
    },
    addlist() {
      this.isAdd = true;
    },
    deletelist(event,Id) {
      deleteMusicList({ id: Id }).then(
        (res) => {
          //   console.log(res);
          this.lists.splice(
            this.lists.findIndex((e) => e.id === Id),
            1
          );
        },
        (err) => {
          console.log(err);
        }
      );
      event.stopPropagation(); 
    },
    editlist(event,id) {
      this.isEdit = true;
      this.editedId = id;
      event.stopPropagation(); 
    },
    add() {
      this.isAdd = !this.isAdd;
      createMusicList({ title: this.addedListName }).then(
        (res) => {
          this.lists.push(res.data);
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    },
    save() {
      this.isEdit = false;
      editMusicList({
        id: this.editedId,
        title: this.changedListName,
        introduction: "",
        pic: "",
        style: "",
      }).then(
        (res) => {
          if(res.code===200){
            const index=this.lists.findIndex((e) => e.id === this.editedId)
            this.lists[index].title=this.changedListName
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
    cancelAdd() {
      this.isAdd = false;
    },
    cancelSave() {
      this.isEdit = false;
    },
  },
  computed:{
  },
  created() {
    getMusicList().then(
      (res) => {
        if (res.code === 200) {
          this.lists = res.data;
        }
        // console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  },
//   mounted(){
//     this.$bus.$on('getLen',this.getwww)
//   },
//   beforeDestroy(){
//     this.$bus.$on('getLen')
//   }
}
</script>
<style scoped>
.add1 {
  /* display: none; */
  position: absolute;
  /* border: 1px solid pink; */
  height: 200px;
  width: 400px;
  left: 300px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  background-color: #ffffff;
}
.edit {
  /* display: none; */
  position: absolute;
  /* border: 1px solid pink; */
  height: 200px;
  width: 400px;
  left: 300px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  background-color: #ffffff;
}
li {
  list-style: none;
  height: 50px;
  /* line-height: 50px; */
}
li:hover {
  background-color: #ededed;
}
.head {
  /* text-align: center; */
  /* margin-top: 10px; */
  padding-top: 20px;
  /* margin-left: 10px; */
}
.list-nav {
  width: 30%;
  height: 100%;
  /* border: 1px solid; */
  background-color: #f9f9f9;
}
.list {
  margin-top: 20px;
  /* text-align: center; */
}
._list {
  height: 100%;
  float: left;
  margin-left: 10px;
}
.title {
  height: 50%;
  /* background-color: aqua; */
  font-size: 14px;
  padding-top: 5px;
}
.num {
  font-size: 14px;
  padding-top: 5px;
}
li > img {
  height: 80%;
  float: left;
  margin-top: 5px;
  margin-left: 5px;
}
.iconfont3 {
  cursor: pointer;
  margin-left: 40px;
  /* padding-top: 20px; */
}
.iconfont3:hover {
  color: #75b9ff;
}
.plus:hover {
  background-color: #dedede;
}
.iconfont1 {
  margin-left: 70px;
  cursor: pointer;
}
.iconfont1:hover {
  color: #75b9ff;
}
.iconfont2:hover {
  color: #75b9ff;
}
.iconfont2 {
  margin-left: 20px;
  cursor: pointer;
}

.header {
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
  font-size: 20px;
}
.container {
  /* display: flex;
    flex-direction: column;
    justify-content: space-around; */
}
.name {
  position: absolute;
  width: 70%;
  height: 50px;
  line-height: 50px;
  left: 40px;
  top: 40px;
  /* background-color: aqua; */
}
input {
  height: 40px;
  outline: none;
  padding-left: 15px;
  margin-left: 10px;
  border-radius: 20px;
  border-color: #8dc4fd;
  /* border: none; */
}
.add2,
.cancel {
  position: absolute;
  cursor: pointer;
  width: 70px;
  height: 40px;
  /* border: 1px solid pink; */
  background-color: #f0f0f0;
  line-height: 40px;
  text-align: center;
  top: 120px;
  border-radius: 20px;
}
.add2 {
  left: 100px;
}
.add2:hover {
  background-color: #e07b60;
  color: #fff;
}
.cancel:hover {
  background-color: #e07b60;
  color: #fff;
}
.cancel {
  right: 100px;
}
.header {
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
  font-size: 20px;
}
.container {
  /* display: flex;
    flex-direction: column;
    justify-content: space-around; */
}
.name {
  position: absolute;
  width: 70%;
  height: 50px;
  line-height: 50px;
  left: 40px;
  top: 40px;
  /* background-color: aqua; */
}
input {
  height: 40px;
  outline: none;
  padding-left: 15px;
  margin-left: 10px;
  border-radius: 20px;
  border-color: #8dc4fd;
  /* border: none; */
}
.save,
.cancel {
  position: absolute;
  cursor: pointer;
  width: 70px;
  height: 40px;
  /* border: 1px solid pink; */
  background-color: #f0f0f0;
  line-height: 40px;
  text-align: center;
  top: 120px;
  border-radius: 20px;
}
.save {
  left: 100px;
}
.save:hover {
  background-color: #e07b60;
  color: #fff;
}
.cancel:hover {
  background-color: #e07b60;
  color: #fff;
}
.cancel {
  right: 100px;
}
</style>
