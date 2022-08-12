<template>
    <div>
        <category-list class="list"></category-list>
        <router-view class="contain" :key="this.$route.fullPath"></router-view>
    </div>
</template>
<script>
import CategoryDetail from 'views/main/category/childcategory/CategoryDetail.vue'
import CategoryList from 'views/main/category/childcategory/CategoryList.vue';

export default {
   name: "Category",
   components: {
    CategoryDetail,
    CategoryList
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
.list {
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.contain {
    margin-top: 50px;
}
</style>
