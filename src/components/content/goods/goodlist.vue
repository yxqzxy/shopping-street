<template>
  <div id="goodlist">
    <gooditem
      v-for="(item, index) in goods"
      :goodsitem="item"
      :key="index"
    ></gooditem>
  </div>
</template>

<script>
import gooditem from './gooditem.vue'
export default {
  props: {
    goods: {
      type: Array,
      default: [],
    },
    data() {},
  },
  components: { gooditem },
}
</script>

<style scoped>
#goodlist {
  display: flex;
  /* 根据宽度决定一行选择多少个 */
  flex-wrap: wrap;
  /* 均等分操作 */
  justify-content: space-around;
}
</style>