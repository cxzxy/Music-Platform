<template>
    <div>
        <h2>{{getMv}}详细信息</h2>
    </div>
</template>
<script>

export default {
   name: "MvDetail",
   components: {
   },
   data() {
      return {
      }
   },
   methods:{
   },
   computed:{
    getMv(){
        return this.$route.query.id
    }
   }
}
</script>
<style scoped>
</style>
