<template>
  <div>
    <swiper class="swiperer">
      <swiper-item v-for="item in topImages">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '../../../../components/common/swiper/index'
export default {
  name: 'detailSwiper',
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {}
  },
  components: {
    Swiper,
    SwiperItem,
  },
}
</script>

<style>
.swiperer {
  height: 300px;
  overflow: hidden;
}
</style>