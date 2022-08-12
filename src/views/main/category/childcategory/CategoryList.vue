<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="getMusics(item.id)"
        :class="{ active: item.id==getId }"
        v-clickDown="index"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { getAllCategory } from "network/category";

export default {
  name: "CategoryList",
  components: {},
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getMusics(id) {
      this.$router.push(`/main/category/categorydetail?id=${id}`);
    },
  },
  directives:{
    clickDown:{
        inserted(el,binding,index){
            if(binding.value===0){
                el.click()
            }
        }
    }
   },
  computed: {
    getId(){
        const parameter=this.$route.fullPath.split('?')[1]
        if(parameter) return parameter[parameter.length-1]
        else return -1
        
    }
  },
  created() {
    getAllCategory().then((res) => {
      console.log(res);
      if (res.code === 200) {
        this.list = res.data;
      }
    });
  },
};
</script>
<style scoped>
li {
  float: left;
  padding-right: 30px;
  cursor: pointer;
  font-size: 20px;
}
li:hover {
  color: #e18160;
}
.active {
  color: #e07b60;
}
</style>
