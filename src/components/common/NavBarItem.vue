<template>
  <div @click="itemClick" :class="{'active':isActive}">
    <slot name="logo"></slot>
    <div><slot name="nav"></slot></div>
  </div>
</template>
<script>
export default {
  name: "NavBarItem",
  components: {},
  props: {
    path: String,
  },
  data() {
    return {};
  },
  computed:{
    isActive(){
        return this.$route.path.indexOf(this.path)!==-1
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(() => {});
    },
  },
};
</script>
<style scoped>
.active {
    color: #e09c92;
}
</style>
