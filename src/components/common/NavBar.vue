<template>
    <div class="nav-bar">
            <nav-bar-item class="navname" path="/main/home">
                <div slot="nav">歌曲推荐</div>
            </nav-bar-item>
            <nav-bar-item class="navname" path="/main/category">
                <div slot="nav">歌曲分类</div>
            </nav-bar-item>
            <nav-bar-item class="navname" path="/main/musiclist">
                <div slot="nav">我的歌单</div>
            </nav-bar-item>
    </div>
</template>
<script>
import NavBarItem from 'components/common/NavBarItem.vue'

export default {
   name: "NavBar",
   components: {
    NavBarItem,
   },
   data() {
      return {
      }
   },
   methods:{
   }
}
</script>
<style scoped>
.nav-bar {
    position:fixed;
    top: 60px;
    height: 100%;
    width: 200px;
    background-color:#ededed;
}
.navname {
    height: 70px;
    text-align: center;
    line-height: 70px;
    font-size: 20px;
    cursor: pointer;
}
</style>
