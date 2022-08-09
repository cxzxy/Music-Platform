<template>
    <div class="nav-bar">
            <nav-bar-item class="navname" path="/main/home">
                <div slot="nav"><span class="el-icon-service iconfont"></span><span class="text">歌曲推荐</span></div>
            </nav-bar-item>
            <nav-bar-item class="navname" path="/main/category">
                <div slot="nav"><span class="el-icon-s-fold iconfont"></span><span class="text">歌曲分类</span></div>
            </nav-bar-item>
            <nav-bar-item class="navname" path='/main/musiclist/listdetail'>
                <div slot="nav"><span class="el-icon-user iconfont"></span><span class="text">我的歌单</span></div>
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
    /* text-align: center; */
    line-height: 70px;
    font-size: 18px;
    cursor: pointer;
}
.iconfont {
    margin-right: 15px;
    margin-left: 30px;
}
</style>
