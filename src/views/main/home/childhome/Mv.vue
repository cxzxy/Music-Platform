<template>
    <div class="mv">
        <h2>推荐MV</h2>
        <ul>
            <li
               v-for="item in mvData" 
               :key="item.mvId"
               @click="toMv(item.mvName)">
               {{item.mvName}}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
   name: "Mv",
   components: {
   },
   data() {
      return {
        mvData:[
            {
                "mvName":"MV1",
                "mvId":1
            },
            {
                "mvName":"MV2",
                "mvId":2
            },
            {
                "mvName":"MV3",
                "mvId":3
            },
            {
                "mvName":"MV4",
                "mvId":4
            },
            {
                "mvName":"MV5",
                "mvId":5
            },
            {
                "mvName":"MV6",
                "mvId":6
            },
            {
                "mvName":"MV7",
                "mvId":7
            },
            {
                "mvName":"MV8",
                "mvId":8
            }
        ]
      }
   },
   methods:{
    toMv(id){
        this.$router.push(`/main/mv?id=${id}`)
    }
   }
}
</script>
<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* align-content: space-around; */
    align-items: center;
    height: 450px;
}
li {
    list-style: none;
    height: 200px;
    width: 23%;
    background-color: #c6e2ff;
    cursor: pointer;
    border-radius: 20px;
    text-align: center;
}
h2 {
    margin-bottom: 10px;
}
</style>
