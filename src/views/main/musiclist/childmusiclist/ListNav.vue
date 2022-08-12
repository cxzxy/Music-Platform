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
      <li @click="toListDetail(lists[0].id, lists[0].title, 0)">
        <img src="~assets/img/1.jpg" alt="" />
        <div class="_list">
          <div class="title">{{ lists[0].title }}</div>
          <div class="num">6首</div>
        </div>
      </li>
      <li
        v-for="(item, index) in lists.slice(1)"
        :key="index"
        @click="toListDetail(item.id, item.title, index + 1)"
        v-clickDown="index"
      >
        <img :src="require(`assets/img/${index + 2}.jpg`)" alt="" />
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
    <div class="curtain" v-show="isAdd">
      <div class="add1">
        <div style="position: relative">
          <div class="header">新建歌单</div>
          <div class="container">
            <div class="name">
              歌单名:<input
                type="text"
                v-model="addedListName"
                @keyup.enter="add"
              />
            </div>
            <div class="button">
              <div @click="add" class="add2">新建</div>
              <div @click="cancelAdd" class="cancel">取消</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="curtain" v-show="isEdit">
      <div class="edit">
        <div style="position: relative">
          <div class="header">修改歌单信息</div>
          <div class="container">
            <div class="name">
              歌单名:<input
                type="text"
                v-model="changedListName"
                @keyup.enter="save"
              />
            </div>
            <div class="button">
              <div @click="save" class="save">保存</div>
              <div @click="cancelSave" class="cancel">取消</div>
            </div>
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
      lists: [
        {
          title: "",
        },
      ],
      addedListName: "",
      changedListName: "",
      isEdit: false,
      isAdd: false,
      editedId: "",
    };
  },
  directives:{
    clickDown:{
        inserted(el,binding,index){
            if(binding.value===0){
                el.click()
            }
        }
    }
   },
  methods: {
    toListDetail(id, title, index) {
      this.$router.push(
        `/main/musiclist/listdetail?id=${id}&title=${title}&index=${index}`
      );
    },
    addlist() {
      this.isAdd = true;

      let m = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", m, { passive: false });
    },
    deletelist(event, Id) {
      deleteMusicList({ id: Id }).then(
        (res) => {
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
    editlist(event, id) {
      this.isEdit = true;
      let m = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", m, { passive: false });

      this.editedId = id;
      event.stopPropagation();
    },
    add() {
      this.isAdd = false;
      let m = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", m, { passive: true });

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
      let m = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", m, { passive: true });

      editMusicList({
        id: this.editedId,
        title: this.changedListName,
        introduction: "",
        pic: "",
        style: "",
      }).then(
        (res) => {
          if (res.code === 200) {
            const index = this.lists.findIndex((e) => e.id === this.editedId);
            this.lists[index].title = this.changedListName;
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
    cancelAdd() {
      this.isAdd = false;
      let m = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", m, { passive: true });
    },
    cancelSave() {
      this.isEdit = false;
      let m = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", m, { passive: true });
    },
  },
  computed: {},
  created() {
    getMusicList().then(
      (res) => {
        if (res.code === 200) {
          this.lists = res.data;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  },
  //   mounted(){
  //     this.$bus.$on('getLen',this.getwww)
  //   },
  //   beforeDestroy(){
  //     this.$bus.$on('getLen')
  //   }
};
</script>
<style scoped>
.curtain {
  position: absolute;
  width: 1000vw;
  height: 1000vh;
  margin-left: -310px;
  margin-top: -415px;
  background-color: rgba(34, 34, 34, 0.5);
  z-index: 999;
}
.add1 {
  position: fixed;
  height: 200px;
  width: 400px;
  left: 650px;
  top: 250px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  z-index: 1000;
}
.edit {
  position: fixed;
  height: 200px;
  width: 400px;
  left: 650px;
  top: 250px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  background-color: #ffffff;
  z-index: 1000;
}
li {
  list-style: none;
  height: 50px;
  width: 200px;
}
li:hover {
  background-color: #ededed;
}
.head {
  padding-top: 20px;
}
.list-nav {
  width: 30%;
  height: 100%;
  background-color: #f9f9f9;
}
.list {
  margin-top: 20px;
  width: 250px;
}
._list {
  height: 100%;
  float: left;
  margin-left: 10px;
}
.title {
  height: 50%;
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
.name {
  position: absolute;
  width: 70%;
  height: 50px;
  line-height: 50px;
  left: 40px;
  top: 40px;
}
input {
  height: 40px;
  outline: none;
  padding-left: 15px;
  margin-left: 10px;
  border-radius: 20px;
  border-color: #8dc4fd;
}
.add2,
.cancel {
  position: absolute;
  cursor: pointer;
  width: 70px;
  height: 40px;
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
.name {
  position: absolute;
  width: 70%;
  height: 50px;
  line-height: 50px;
  left: 40px;
  top: 40px;
}
input {
  height: 40px;
  outline: none;
  padding-left: 15px;
  margin-left: 10px;
  border-radius: 20px;
  border-color: #8dc4fd;
}
.save,
.cancel {
  position: absolute;
  cursor: pointer;
  width: 70px;
  height: 40px;
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
.head {
  width: 250px;
}
</style>
