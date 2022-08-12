<template>
    <div>
        <ul class="musics">
            <li v-for="(item,index) in list" :key="index" @click="toMusic(item.id)">
            <img :src="item.pic" alt="">
            <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { getMusicCategory } from 'network/category';

export default {
   name: "CategoryDetail",
   components: {
   },
   data() {
      return {
        list:[]
      }
   },
   computed:{
    getId(){
        return this.$route.query.id
    }
   },
   methods:{
    toMusic(id){
        this.$router.push(`/main/music?id=${id}`)
    }
   },
   created(){
    getMusicCategory({categoryId: this.getId}).then(
        res=>{
            if(res.code==200){
                this.list=res.data
            }
        },
        err=>{
            console.log(err)
        }
    )
   }
}
</script>
<style scoped>
.musics {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
li {
    width: 250px;
    cursor: pointer;
}
li:hover {
    color: #e1886e;
}
img {
    width: 100%;
}
</style>
