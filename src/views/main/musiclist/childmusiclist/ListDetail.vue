<template>
  <div class="detail">
    <div class="list">
      <div class="img">
        <img src="~assets/img/5.jpg" alt="" />
        <div>
        <div>{{ getListTitle }}</div>
        <!-- <div>{{getNowTime()}}</div> -->
        </div>
      </div>
      <h2></h2>
    </div>
    <div class="musics">
      <h2>歌曲列表</h2>
      <div class="title">
        <span class="one"></span>
        <span class="two">歌曲标题</span>
        <span class="three">时长</span>
        <span class="four">歌手</span>
        <span class="five">专辑</span>
      </div>
      <ul class="music">
        <li v-for="(item, index) in musicList" :key="index">
          <span class="one"
            >{{ index + 1 }}.<span
              class="el-icon-video-play play"
              @click="toplay"
            ></span
            ><span
              class="el-icon-delete delete"
              @click="todelete(item.id)"
            ></span
          ></span>
          <span class="two">{{ item.name }}</span>
          <span class="three">{{ getTime() }}</span>
          <span class="four">{{ item.introduction }}</span>
          <span class="five">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getMusicsInList, deleteFromList } from "network/musiclist";

export default {
  name: "ListDetail",
  components: {},
  data() {
    return {
      listDetail: {},
      musicList: [],
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
    // addZero(s) {
    //   return s < 10 ? "0" + s : s;
    // },
    // getNowTime() {
    //   const data = new Data();
    //   let year = date.getFullYear();
    //   let month = date.getMonth() + 1;
    //   let day = date.getDate();
    //   let hour = date.getHours();
    //   let minute = date.getMinutes();
    //   let second = date.getSeconds();
    //   let time =
    //     "当前时间是：" +
    //     year +
    //     "-" +
    //     addZero(month) +
    //     "-" +
    //     addZero(day) +
    //     " " +
    //     addZero(hour) +
    //     ":" +
    //     addZero(minute) +
    //     ":" +
    //     addZero(second);
    //   return time;
    // },
    todelete(songid) {
      deleteFromList({ songId: songid, listId: this.getListId }).then(
        (res) => {
          if (res.code !== 200) {
            alert(res.msg);
          } else {
            this.musicList.splice(
              this.musicList.findIndex((e) => e.id === songid),
              songid
            );
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
    toplay() {},
  },
  computed: {
    getListId() {
      return this.$route.query.id;
    },
    getListTitle() {
      return this.$route.query.title;
    },
  },
  watch: {
    //监视路由变化
    "$route.query.monthPlanId": "getMusicsInList",
  },
  created() {
    getMusicsInList({ ListId: this.getListId }).then(
      (res) => {
        // console.log(res);
        if (res.code === 200) {
          // console.log(res.data)
          this.musicList = res.data;
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
.img {
  display: flex;
}
img {
  width: 200px;
  /* height: 50px; */
  margin-left: 50px;
  margin-right: 50px;
}
.img > div {
  font-weight: 600;
  font-size: 30px;
  margin-top: 10px;
}
.musics h2 {
  /* padding-bottom: 10px;; */
  margin-bottom: 10px;
  margin-left: 10px;
}
.title {
  width: 100%;
  height: 30px;
  /* border: 1px solid; */
  border-top: 1px #ededed solid;
}
.play {
  margin-left: 50px;
  cursor: pointer;
}
.play:hover {
  color: #75b9ff;
}
.delete {
  margin-left: 10px;
  cursor: pointer;
}
.delete:hover {
  color: #75b9ff;
}
.one,
.two,
.four,
.five,
.three {
  float: left;
  display: block;
  /* border-right: 1px solid; */
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
}
.two,
.five {
  font-size: 14px;
}
.two,
.four,
.five {
  /* font-weight: 550; */
}
.music > li {
  width: 100%;
  height: 30px;
  /* border: 1px solid; */
  list-style: none;
}
.music > li:nth-child(2n + 1) {
  background-color: #ededed;
}
.one {
  width: 15%;
}
.two {
  width: 35%;
}
.three {
  width: 13%;
}
.four {
  width: 13%;
}
.five {
  width: 24%;
}
.musics {
  width: 100%;
}
.detail {
  height: 100%;
  width: 100%;
}
.list {
  height: 300px;
  /* border-bottom: 1px solid; */
}
</style>
