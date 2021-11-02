<template>
  <div id="SildeShow">
    <swiper>
      <swiper-item v-for="(item, index) in list" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
// 轮播组件
import { Swiper, SwiperItem } from '../../../components/common/swiper/index'
// 请求数据

export default {
  props: {
    list: Array,
  },
  components: {
    Swiper,
    SwiperItem,
  },
}
</script>

<style>
</style>