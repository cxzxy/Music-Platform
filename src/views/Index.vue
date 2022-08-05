<template>
  <div>
    <nav-bar></nav-bar>
    <div class="main">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/NavBar.vue";
export default {
  name: "Index",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.main {
  /* border: 1px solid pink; */
  margin: 80px 100px 0px 300px;
}
</style>
