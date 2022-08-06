<template>
  <div>
    <h2>推荐歌曲</h2>
    <ul>
      <li
        v-for="(item,index) in songs"
        :key="item.index"
        @click="toMusic(item.ide)"
      >
      <div class="img"><img :src="item.picUrl" alt=""></div>
      <span class="songname">{{item.name}}</span>
      <span class="personname">----{{ item.song.artists[0].name }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "Music",
  components: {},
  data() {
    return {
      songs:[]
    };
  },
  methods: {
    toMusic(id) {
      // 路由传参
      this.$router.push(`/main/music?id=${id}`);
    },
  },
  created() {
    // 最新音乐
    axios({
      url: "https://autumnfish.cn/personalized/newsong",
      method: "get",
    }).then((res) => {
      // console.log(res)
      this.songs = res.data.result;
    });
  },
};
</script>
<style scoped>
li {
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
  color: #f9f9f9;
  background-color: #8ea9ff;
}
</style>
