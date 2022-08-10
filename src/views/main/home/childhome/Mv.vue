<template>
    <div class="mv">
        <h2>推荐MV</h2>
        <ul>
            <li
               v-for="(item,index) in mvData" 
               :key="index"
               @click="toMv(item.id)">
               <img :src="item.picUrl" alt="">
               <span class="el-icon-video-play play"></span>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
// import { getRecommendMv } from 'network/home'

export default {
   name: "Mv",
   components: {
   },
   data() {
      return {
        mvData:[],
      }
   },
   methods:{
    toMv(id){
        this.$router.push(`/main/mv?id=${id}`)
    },
   },
   created(){
    axios({
        method: 'GET',
        url: 'https://autumnfish.cn/personalized/mv'
    }).then(
        res=>{
            this.mvData=res.data.result
        }
    )
    // getRecommendMv().then(
    //     res=>{
    //         // console.log(res)
    //         if(res.code===200){
    //             this.mvData=res.data
    //         }
    //         else{
    //             alert(res.msg)
    //         }
    //     },
    //     err=>{
    //         console.log(err)
    //     }
    // )
   }
}
</script>
<style scoped>
.play {
    position: absolute;
    top: 50px;
    left: 100px;
    font-size: 50px;
    color: #fff
}
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* align-content: space-around; */
    align-items: center;
    /* height: 450px; */
    /* background-color: aqua; */
    padding-bottom: 50px;
}
li {
    position: relative;
    list-style: none;
    height: 150px;
    width: 23.5%;
    /* background-color: pink; */
    cursor: pointer;
    border-radius: 20px;
    text-align: center;
}
li img {
    height: 100%;
    border-radius: 5px;
}
h2 {
    padding-top: 20px;
    margin-bottom: 10px;
}
</style>
