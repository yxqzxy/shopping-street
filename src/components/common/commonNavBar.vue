<template>
  <div id="commonnavbar">
    <!-- 这是搜索导航栏  -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#commonnavbar {
  width: 100%;
  display: flex;
  height: 49px;
}
.left,
.right {
  width: 88px;
}
.center {
  flex: 1;
  width: 100%;
  line-height: 49px;
  text-align: center;
  font-size: 16px;
}
</style>