<template>
  <div>
    <div class="flex">
      <div class="left"><img :src="song.pic" alt="" /></div>
      <div class="right">
        <h2>{{ song.name }}</h2>
        <div class="singer">
          歌手: <span>{{ song.introduction }}</span>
        </div>
        <div class="zhuanji">
          专辑：<span>{{ song.name }}</span>
        </div>
        <el-button
          type="primary"
          icon="el-icon-caret-right"
          circle
          class="button"
          @click="toplay"
        ></el-button>
      </div>
      <ul class="edge">
        <li
          v-for="(item, index) in songs"
          :key="index"
          @click="toMusic(item.id)"
        >
          <div class="img"><img :src="item.pic" alt="" /></div>

          <div class="info">
            <h3>{{ item.name }}</h3>
            <div class="_singer">
              歌手: <span>{{ item.introduction }}</span>
            </div>
            <div class="_zhuanji">
              专辑：<span>{{ item.name }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="play">
      <audio :src="song.url" controls="controls" ref="audio"></audio>
    </div>
  </div>
</template>
<script>
import { getRecommendMusic } from "network/home";
export default {
  name: "MusicDetail",
  components: {},
  data() {
    return {
      songs: [],
      song: {},
    };
  },

  watch: {
    //监视路由变化
    "$route.query.monthPlanId": " getRecommendMusic",
  },
  computed: {
    //拿到路由传来的数据
    getMusic() {
      return this.$route.query.id;
    },
  },
  methods: {
    toplay() {
      this.$refs.audio.play();
    },
    toMusic(id) {
      this.$router.push(`/main/music?id=${id}`);
    },
  },
  created() {
    getRecommendMusic().then(
      (res) => {
        // console.log(res)
        if (res.code === 200) {
          this.songs = res.data;
          const index = this.songs.findIndex((e) => e.id == this.getMusic);
          this.song = this.songs[index];
          console.log(this.song);
        }
      },
      (err) => {
        // console.log(err)
      }
    );
  },
};
</script>
<style scoped>
.flex {
  display: flex;
}
.left {
  height: 100%;
}
.left img {
  width: 250px;
  border-radius: 50%;
}
.right {
  margin-left: 50px;
  flex: 1;
}
.right h2 {
  margin-top: 20px;
  color: #333333;
}
.right .singer {
  margin-top: 10px;
  font-size: 12px;
}
.right .zhuanji {
  margin-top: 10px;
  font-size: 12px;
}
.right .singer > span,
.right .zhuanji > span {
  color: #3e8dd7;
  cursor: pointer;
}
.button {
  margin-top: 20px;
  font-size: 20px;
}
.play {
  position: fixed;
  bottom: 10px;
  background-color: #f1f3f4;
  border-radius: 10px;
}
audio {
  width: 800px;
  height: 30px;
  /* color: pink */
}
.edge li {
  position: relative;
  height: 100px;
  margin-top: 10px;
  /* background-color: #3e8dd7; */
  cursor: pointer;
}
.edge li:hover {
  background-color: #ededed;
}
.edge > li > .img {
  position: absolute;
}
.img img {
  width: 100px;
}
.edge > li > .info {
  position: absolute;
  left: 110px;
  width: 60%;
}
.edge {
  width: 300px;
}
._singer {
  font-size: 12px;
}
._zhuanji {
  font-size: 10px;
}
h3 {
  font-size: 14px;
}
</style>
