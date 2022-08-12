<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { getBanners } from "network/home";

export default {
  name: "Carousel",
  components: {},
  data() {
    return {
      banners: [
        {
          imageUrl:
            "http://p1.music.126.net/H9RPYq_Nzqj8BG7KQvKeLA==/109951167757643710.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/EGmtRPeKEsWEfX_Qn3LPYQ==/109951167757666574.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/Uh-85eK8lD-dhBV1dvo0Iw==/109951167757782543.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/RiyPpkgBQO7xWLd29-2YkQ==/109951167757788520.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/FGUwSIXFYdn7NlIB3DtNgg==/109951167757781370.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/wv5Tsld66reR50bFuEKiLA==/109951167757781490.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/k1JKGITrihrhxdC2FxenGQ==/109951167757793981.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/bl8c3FMCISamXTiBnewdsA==/109951167757748304.jpg",
        },
      ],
    };
  },
  methods: {},
  created() {
    getBanners().then(
      (res) => {
        this.Banners = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item {
  border-radius: 20px;
}
</style>
