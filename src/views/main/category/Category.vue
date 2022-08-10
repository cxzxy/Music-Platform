<template>
  <div>
    <div class="tab-bar">
      <span
        class="item"
        :class="{ active: tag == '全部' }"
        @click="tag = '全部'"
      >
        全部
      </span>
      <span
        class="item"
        :class="{ active: tag == '欧美' }"
        @click="tag = '欧美'"
      >
        欧美
      </span>
      <span
        class="item"
        :class="{ active: tag == '华语' }"
        @click="tag = '华语'"
      >
        华语
      </span>
      <span
        class="item"
        :class="{ active: tag == '流行' }"
        @click="tag = '流行'"
      >
        流行
      </span>
      <span
        class="item"
        :class="{ active: tag == '说唱' }"
        @click="tag = '说唱'"
      >
        说唱
      </span>
      <span
        class="item"
        :class="{ active: tag == '摇滚' }"
        @click="tag = '摇滚'"
      >
        摇滚
      </span>
      <span
        class="item"
        :class="{ active: tag == '民谣' }"
        @click="tag = '民谣'"
      >
        民谣
      </span>
      <span
        class="item"
        :class="{ active: tag == '电子' }"
        @click="tag = '电子'"
      >
        电子
      </span>
      <span
        class="item"
        :class="{ active: tag == '轻音乐' }"
        @click="tag = '轻音乐'"
      >
        轻音乐
      </span>
      <span
        class="item"
        :class="{ active: tag == '影视原声' }"
        @click="tag = '影视原声'"
      >
        影视原声
      </span>
      <span class="item" :class="{ active: tag == 'ACG' }" @click="tag = 'ACG'">
        ACG
      </span>
      <span
        class="item"
        :class="{ active: tag == '怀旧' }"
        @click="tag = '怀旧'"
      >
        怀旧
      </span>
      <span
        class="item"
        :class="{ active: tag == '治愈' }"
        @click="tag = '治愈'"
      >
        治愈
      </span>
      <span
        class="item"
        :class="{ active: tag == '旅行' }"
        @click="tag = '旅行'"
      >
        旅行
      </span>
    </div>
    <ul>
        <li v-for="(item,index) in musicImgUrl" :key="index">
        <img :src="item" alt="">
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Category",
  components: {},
  data() {
    return {
        musicImgUrl:[
            "http://p1.music.126.net/-8A5EGZ8hz3byulhycfk2Q==/109951165108319236.jpg",
            "http://p1.music.126.net/40-oaIu4hNafeJsDpoPbFA==/109951166098673860.jpg",
            "http://p1.music.126.net/QtIMaPL322AIB7gDuVF2Qw==/109951167362479810.jpg",
            "http://p1.music.126.net/uVXs50TZhM6t7HHyobHZ9A==/109951163843892105.jpg",
            "http://p1.music.126.net/5OLOx-9vVfslxfLHJwAFOQ==/109951166296397852.jpg",
            "http://p1.music.126.net/ezB7VLeL5XjkplbhtsxCGA==/109951166625409496.jpg",
            "http://p1.music.126.net/_bI2Ju0zDzdDkWgOiC4fmQ==/109951167672668260.jpg",
            "http://p1.music.126.net/QunVEzzocr8xXzXSgnoGuw==/109951167471450153.jpg",
            "http://p1.music.126.net/6xUjyVuTlIAbFJl76mFP9g==/109951167427291979.jpg",
            "http://p1.music.126.net/JcpOXM243FptA9tRYnPFlw==/109951167423159409.jpg"
        ],
        tag: '全部'
    };
  },
  methods: {},
};
</script>
<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 100px;
    /* background-color: #e07b60; */
}
ul>li {
    width: 18%;
    margin-left: 20px;;
    margin-top: 20px;
    cursor: pointer;
}
img {
    width: 100%;
    border-radius: 10px;
}
.tab-bar {
    margin-left: 350px;
    padding-top: 10px;
}
.tab-bar>span {
    cursor: pointer;
    font-size: 18px;
    padding-left: 10px;;
}
.active {
    color: #e07b60;
}
</style>
