<template>
  <div>
    <Carousel></Carousel>
    <music class="music"></music>
    <mv class="mv"></mv>
  </div>
</template>
<script>
import Carousel from "views/main/home/childhome/Carousel.vue";
import Music from "views/main/home/childhome/Music.vue";
import Mv from "views/main/home/childhome/Mv.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Music,
    Mv,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.music {
  margin-top: 20px;
}
.mv {
  margin-top: 20px;
}
</style>
