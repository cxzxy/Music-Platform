<template>
  <div>
    <list-nav class="listNav"></list-nav>
    <router-view class="music-detail" :key="$route.fullPath"></router-view>
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
  computed: {},
};
</script>
<style scoped>
.listNav {
  float: left;
  width: 23%;
  margin-top: -20px;
  margin-left: -50px;
  padding-left: 60px;
  /* height: 100vh */
  height: 604px;
}
.music-detail {
  height: 100%;
  margin-left: 212px;
  width: 70%;
  border-top: 1px solid #f1f3f4;
}
</style>
