<template>
  <div>
    <list-nav class="listNav"></list-nav>
    <router-view class="music-detail" :key="key"></router-view>
  </div>
</template>
<script>
import ListNav from "./childmusiclist/ListNav.vue";
import ListDetail from "./childmusiclist/ListDetail.vue";

export default {
  name: "MusicList",
  components: {
    ListNav,
    ListDetail,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    key(){
        return this.$route.fullPath
    }
  }
};
</script>
<style scoped>
.listNav {
  position: fixed;
  height: 100%;
  width: 19%;
  margin-top: -20px;
  margin-left: -100px;
  padding-left: 60px;
}
.music-detail {
    /* background-color: pink; */
    height: 100%;
    margin-left: 200px;
    width: 85%
}
</style>
