<template>
  <div id="main-nav-bar">
    <nav-bar class="bgc"></nav-bar>
  </div>
</template>

<script>
import CommonNavBar from '../../../components/common/commonNavBar.vue'
import NavBar from '../../../components/content/navbar/NavBar.vue'
export default {
  components: { CommonNavBar, NavBar },
}
</script>

<style scoped>
.left,
.right {
  width: 88px;
}
.center {
  flex: 1;
  width: 100%;
  line-height: 44px;
  text-align: center;
  font-size: 16px;
  background-color: pink;
}
.bgc {
  background-color: pink;
}
</style>