<template>
  <div>
    <h2 class="h2">推荐歌曲</h2>
    <ul class="ul1">
      <li v-for="(item, index) in songs" :key="index" @click="toMusic(item.id)">
        <div class="img"><img :src="item.pic" alt="" /></div>
        <span class="songname">{{ item.name }}</span>
        <span class="personname"
          >&nbsp;&nbsp;&nbsp;&nbsp;{{ item.introduction }}</span
        >
        <span
          class="el-icon-folder-add addtolist"
          @click="addToList($event, item.id)"
        ></span>
      </li>
    </ul>
    <div class="curtain" v-show="isAdd">
      <div class="_addtolist">
        <h2>
          添加到歌单<span class="el-icon-close close" @click="close"></span>
        </h2>
        <ul class="list" style="overflow-y: scroll">
          <li v-for="(item, index) in lists" :key="index" @click="add(item.id)">
            <img :src="require(`assets/img/${index + 1}.jpg`)" alt="" />
            <div class="_list">
              <div class="title">{{ item.title }}</div>
              <div class="num">6首</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getRecommendMusic } from "network/home";
import { getMusicList, addToList } from "network/musiclist";

export default {
  name: "Music",
  components: {},
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
      this.$router.push(`/main/music?id=${id}`);
    },
    addToList(event, id) {
      this.isAdd = true;

      //禁止页面滑动
      let m = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", m, { passive: false });

      this.songId = id;
      event.stopPropagation(); //阻止事件冒泡
    },
    close() {
      this.isAdd = false;

      let m = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", m, { passive: true });
    },
    add(listid) {
      this.isAdd = false;
      let m = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", m, { passive: true });

      addToList({ listId: listid, songId: this.songId }).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
      this.$message("添加成功")
    },
  },
  created() {
    getRecommendMusic().then(
      (res) => {
        console.log(res);
        if (res.code === 200) {
          this.songs = res.data;
        }
      },
      (err) => {
        console.log(err);
      }
    );
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
.curtain {
  position: absolute;
  width: 100vw;
  height: 200vh;
  margin-left: -300px;
  margin-top: -838px;
  background-color: rgba(34, 34, 34, 0.5);
  z-index: 999;
}
._addtolist {
  position: fixed;
  width: 450px;
  height: 250px;
  border-radius: 30px;
  top: 300px;
  left: 600px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  z-index: 10000;
}
._addtolist h2 {
  padding-top: 20px;
  padding-left: 170px;
}
.list li {
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
  position: relative;
  margin-top: 10px;
  list-style: none;
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
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
  right: 10px;
  font-size: 20px;
}
.list {
  margin-top: 20px;
  height: 70%;
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
._list > li > img {
  height: 80%;
  float: left;
  margin-top: 5px;
  margin-left: 5px;
}
</style>
