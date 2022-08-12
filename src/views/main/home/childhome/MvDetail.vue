<template>
  <div class="mvs">
    <div class="left">
      <h2>mv详情</h2>
      <video :src="mvUrl" controls></video>
      <div class="info">
        <img :src="picUrl" alt="" />
        <span class="name">{{ mvInfo.artistName }}</span>
      </div>
      <div class="mvinfo">
        <h2 class="title">{{ mvInfo.name }}</h2>
        <span class="date">发布：{{ mvInfo.publishTime }}</span>
        <span class="number">播放：{{ mvInfo.playCount }}次</span>
      </div>
    </div>
    <div class="right">
      <h2>相关推荐</h2>
      <ul>
        <li
          v-for="(item, index) in mvsData"
          :key="index"
          @click="toMv(item.id)"
        >
          <img :src="item.picUrl" alt="" class="mvsimg" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "MvDetail",
  components: {},
  data() {
    return {
      mvsData: [],
      mvData: {},
      mvInfo: {},
      picUrl: "",
      mvUrl: "",
    };
  },
  methods: {
    toMv(id) {
      this.$router.push(`/main/mv?id=${id}`);
      this.$router.go(0);
    },
  },
  watch: {},
  computed: {},
  created() {
    axios({
      method: "GET",
      url: "https://autumnfish.cn/mv/detail",
      params: {
        mvid: this.$route.query.id,
      },
    }).then((res) => {
      this.mvInfo = res.data.data;
      //获取歌手信息
      axios({
        method: "GET",
        url: "https://autumnfish.cn/artists",
        params: {
          id: this.mvInfo.artists[0].id,
        },
      }).then((res) => {
        this.picUrl = res.data.artist.picUrl;
        console.log();
      });
    });
    axios({
      method: "GET",
      url: "https://autumnfish.cn/mv/url",
      params: {
        id: this.$route.query.id,
      },
    }).then((res) => {
      this.mvUrl = res.data.data.url;
      console.log(res.data);
    });

    axios({
      method: "GET",
      url: "https://autumnfish.cn/personalized/mv",
    }).then((res) => {
      this.mvsData = res.data.result;
    });
  },
};
</script>
<style scoped>
.mvs {
  display: flex;
}
.right {
  flex: 1;
  margin-left: 100px;
  text-align: center;
}
video {
  margin-top: 20px;
  width: 700px;
}
.mvsimg {
  width: 200px;
  margin-top: 20px;
  cursor: pointer;
}
.info {
  height: 100px;
  margin-top: 20px;
}
.name {
  float: left;
  margin-left: 20px;
  margin-top: 30px;
  font-weight: 600;
  font-size: 20px;
}
.info img {
  float: left;
  width: 100px;
  height: 95px;
  border-radius: 50%;
}
.mvinfo {
  margin-top: 10px;
}
.mvinfo span {
  margin-top: 10px;
}
</style>
