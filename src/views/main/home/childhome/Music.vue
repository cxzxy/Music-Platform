<template>
  <div>
    <h2>推荐歌曲</h2>
    <ul class="ul1">
      <li v-for="(item, index) in songs" :key="index" @click="toMusic(item.id)">
        <div class="img"><img :src="item.pic" alt="" /></div>
        <span class="songname">{{ item.name }}</span>
        <span class="personname">&nbsp;&nbsp;&nbsp;&nbsp;{{ item.introduction }}</span>
        <span
          class="el-icon-folder-add addtolist"
          @click="addToList($event, item.id)"
        ></span>
      </li>
    </ul>
    <div class="_addtolist" v-show="isAdd">
      <h2>
        添加到歌单<span class="el-icon-close close" @click="close"></span>
      </h2>
      <ul class="list" style="overflow-y: scroll">
        <li v-for="(item, index) in lists" :key="index" @click="add(item.id)">
          <img
            :src="require(`assets/img/${index+1}.jpg`)"
            alt=""
          />
          <div class="_list">
            <div class="title">{{ item.title }}</div>
            <div class="num">6首</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import AddToList from "views/main/home/childhome/AddToList.vue";

// import axios from 'axios'
import { getRecommendMusic } from "network/home";
import { getMusicList, addToList } from "network/musiclist";

export default {
  name: "Music",
  components: {
    // AddToList,
  },
  data() {
    return {
      songs: [],
      lists: [],
      isAdd: false,
      songId: "",
    };
  },
  methods: {
    toMusic(id) {
      //路由传参
      this.$router.push(`/main/music?id=${id}`);
      //   console.log('歌曲详情')
    },
    addToList(event,id) {
      //   console.log("添加到歌单");
      this.isAdd = true;
      this.songId=id
      event.stopPropagation(); //阻止事件冒泡
    },
    close() {
      this.isAdd = false;
    },
    add(listid) {
      this.isAdd = false;
      addToList({listId: listid,songId: this.songId}).then(
        res=>{
            console.log(res)
        },
        err=>{
            console.log(err)
        }
      )
    },
  },
  created() {
    getRecommendMusic().then(
      (res) => {
        // console.log(res)
        if (res.code === 200) {
          this.songs = res.data;
        }
      },
      (err) => {
        // console.log(err)
      }
    );
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
    );
  },
};
</script>
<style scoped>
.close {
  position: absolute;
  margin-left: 110px;
  cursor: pointer;
}
.close:hover {
  color: #e07b60;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
._addtolist {
  position: absolute;
  width: 450px;
  height: 250px;
  /* border: 1px solid pink; */
  border-radius: 30px;
  top: 300px;
  left: 600px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  /* text-align: center; */
  /* background-color: #e07b6d; */
  background-color: #ffffff;
}
h2 {
  padding-top: 20px;
  padding-left: 170px;
}
.list li {
  /* background-color: #e07b6d; */
  height: 50px;
  width: 80%;
  margin: 0 auto;
  list-style: none;
  margin-bottom: 5px;
}
.list li:hover {
  background-color: #e6e6e6;
}
.ul1 li {
  margin-top: 10px;
  list-style: none;
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  /* background-color: #e07b6d; */
}
img {
  float: left;
  height: 50px;
  width: 50px;
  border-radius: 5px;
}
.songname {
  padding-left: 10px;
  font-weight: 600;
}
li:hover {
  color: #e07b6d;
}
.addtolist {
    position: absolute;
  right: 100px;
  font-size: 20px;
}
.list {
  margin-top: 20px;
  /* text-align: center; */
  height: 70%;
  /* background-color: #e07b6d; */
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
._list > li > img {
  height: 80%;
  float: left;
  margin-top: 5px;
  margin-left: 5px;
}
</style>
