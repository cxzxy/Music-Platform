<template>
  <div>
    <top-bar></top-bar>
    <index></index>
  </div>
</template>
<script>
import TopBar from "components/TopBar.vue";
import Index from "views/Index.vue";

export default {
  name: "Main",
  components: {
    TopBar,
    Index,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
</style>
