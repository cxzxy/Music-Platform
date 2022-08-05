<template>
    <div>
        <h2>推荐歌曲</h2>
        <ul>
            <li 
                v-for="item in musicData" 
                :key="item.musicId"
                @click="toMusic(item.musicName)">
            {{item.musicName}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
   name: "Music",
   components: {
   },
   data() {
      return {
        musicData:[
            {
                "musicName": "音乐1",
                "musicId": 1
            },
            {
                "musicName": "音乐2",
                "musicId": 2
            },
            {
                "musicName": "音乐3",
                "musicId": 3
            },
            {
                "musicName": "音乐4",
                "musicId": 4
            },
            {
                "musicName": "音乐5",
                "musicId": 5
            },
            {
                "musicName": "音乐6",
                "musicId": 6
            },
            {
                "musicName": "音乐7",
                "musicId": 7
            }
        ]
      }
   },
   methods:{
    toMusic(id){
        // 路由传参
        this.$router.push(`/main/music?id=${id}`)
      }
   }
}
</script>
<style scoped>
li {
    list-style: none;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
}
li:hover {
    background-color: #e09caa;
}
</style>
