<template>
    <div>
        <h2>{{getMusic}}详情</h2>
    </div>
</template>
<script>
export default {
   name: "MusicDetail",
   components: {
   },
   data() {
      return {
      }
   },
   computed: {
    //拿到路由传来的数据
    getMusic(){
        return this.$route.query.id
    }
   },
   methods:{
   }
}
</script>
<style scoped>
</style>
