<template>
  <div class="xxx">
    <div class="head">
      <h2>{{ getSearchName }}</h2>
      <span>一共找到{{ searchResult.length }}条结果</span>
    </div>
    <h2>歌曲列表</h2>
    <div>
      <ul>
        <li class="title">
          <span class="zero"></span>
          <span class="one">歌曲名</span>
          <span class="two">歌手</span>
          <span class="three">专辑</span>
          <span class="four">歌曲时长</span>
        </li>
        <ul class="list_">
          <li v-for="(item, index) in searchResult" :key="index">
            <span class="zero">&nbsp;&nbsp;&nbsp;{{ index }}
            <span class="el-icon-video-play play" @click="toplay(item.id)"></span>
            <span class="el-icon-folder-add add" @click="addToList($event, item.id)"></span>
            </span>
            <span class="one">{{ item.name }}</span>
            <span class="two">{{ item.introduction }}</span>
            <span class="three">{{ item.name }}</span>
            <span class="four">{{ getTime() }}</span>
          </li>
        </ul>
      </ul>
    </div>
    <div class="curtain" v-show="isAdd">
      <div class="_addtolist">
        <h2>
          添加到歌单<span class="el-icon-close close" @click="close"></span>
        </h2>
        <ul class="list" style="overflow-y: scroll">
          <li v-for="(item, index) in lists" :key="index" @click="add(item.id)">
            <img :src="require(`assets/img/${index + 1}.jpg`)" alt="" />
            <div class="_list">
              <div class="_title">{{ item.title }}</div>
              <div class="num">6首</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getSearchResult, getMusicList,addToList} from "network/musiclist";
export default {
  name: "Result",
  components: {},
  data() {
    return {
      searchResult: [],
      isAdd: false,
      lists: []
    };
  },
  methods: {
    getTime() {
      return (
        "0" +
        (Math.random() * 2 + 2).toString().slice(0, 1) +
        ":" +
        (Math.random() * 51 + 10).toString().slice(0, 2)
      );
    },
    toplay(id){
        this.$router.push(`/main/music?id=${id}`)
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
  computed: {
    getSearchName() {
      return this.$route.query.SongName;
    },
  },
  created() {
    getSearchResult({ SongName: this.getSearchName }).then(
      (res) => {
        console.log(res);
        if (res.code === 200) {
          this.searchResult = res.data;
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
.xxx {
  width: 100%;
}
.play,.add {
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
}
.play:hover,.add:hover {
    color: #75b9ff;
}
.title {
  border-top: 1px solid #e4e7ed;
  margin-top: 10px;
  height: 30px;
}
li {
  height: 50px;
  line-height: 40px;
  width: 100%;
}
.list_ {
  margin-top: 10px;
}
.list_ > li:nth-child(2n + 1) {
  background-color: #fafafa;
}
.zero,
.one,
.two,
.three,
.four {
  display: inline-block;
}
.zero {
  width: 10%;
}
.one {
  width: 28%;
}
.two {
  width: 28%;
  /* overflow: hidden; */
}
.three {
  width: 24%;
}
.four {
  width: 10%;
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
.close {
  position: absolute;
  margin-left: 110px;
  cursor: pointer;
}
.close:hover {
  color: #e07b60;
}
._list {
  height: 100%;
  float: left;
  margin-left: 10px;
}
._title {
  height: 50%;
  font-size: 14px;
  padding-top: 5px;
  margin-top: -13px;
}
.num {
  font-size: 14px;
  padding-top: 5px;
}
img {
  float: left;
  height: 50px;
  width: 50px;
  border-radius: 5px;
}
</style>
