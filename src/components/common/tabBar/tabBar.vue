<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#tabBar {
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0 -2px 1px rgb(100, 100, 100 0.08);
}
</style>