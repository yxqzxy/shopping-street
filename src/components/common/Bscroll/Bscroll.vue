<template>
  <div ref="wapper">
    <div>
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  props: {
    probeType: {
      type: Number,
      default() {
        return 3
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wapper, {
      click: true,
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })
    // 监听实时滚动
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
    }
    // 监听上拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('loadMore')
      })
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    //继续完成上拉加载更多
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh() {
      console.log('kkk')
      this.scroll.refresh()
    },
  },
}
</script>

<style scoped>
</style>