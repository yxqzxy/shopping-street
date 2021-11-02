<template>
  <div id="home">
    <mani-nav-bar></mani-nav-bar>
    <nav-bar-control
      @index="change"
      ref="navbar2"
      :class="{ control: istrue }"
    ></nav-bar-control>
    <b-scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="imgshow"
      :pull-up-load="true"
      @loadMore="loadMore"
    >
      <slide-show :list="Slidelist"></slide-show>
      <home-recommend :recommend="recommend"></home-recommend>
      <week-fashion></week-fashion>
      <nav-bar-control
        @index="change"
        ref="navbar1"
        :class="{ fixed: true }"
      ></nav-bar-control>
      <goodlist :goods="showgoods"></goodlist>
    </b-scroll>
    <backtop @click.native="btnBackTop" v-show="istrue"></backtop>
  </div>
</template>

<script>
// 请求数据
import { getHomeMutidata, getHomeGoods } from '../../network/home'
// 导入组件
import SlideShow from './Slideshow/SlideShow.vue'
import ManiNavBar from './mainNavBar/MainNavBar.vue'
import HomeRecommend from './Recommend/HomeRecommend.vue'
import WeekFashion from './weekFashion/WeekFashion.vue'
import NavBarControl from './navBarControl/navBarControl.vue'

// 直接导入的公共组件
import backtop from '../../components/content/backTop/backTop'
import Goodlist from '../../components/content/goods/goodlist.vue'
import BScroll from '../../components/common/Bscroll/Bscroll.vue'

// 导入工具jS里面的防抖函数
import { debounce } from '../../comon/tool'
export default {
  data() {
    return {
      Slidelist: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      CurrentType: 'pop',
      istrue: false,
      // tabcontrol距离顶部多远
      offsetTabBar: 0,
      saveY: 0,
    }
  },
  components: {
    ManiNavBar,
    SlideShow,
    HomeRecommend,
    WeekFashion,
    NavBarControl,
    Goodlist,
    BScroll,
    backtop,
  },
  created() {
    // 请求推荐栏轮播图的数据
    this.getHomeMutidataSlide()
    // 请求商品数据
    this.getHomeGood('pop')
    this.getHomeGood('new')
    this.getHomeGood('sell')
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('imgLoad', () => {
      refresh()
    })
    setTimeout(() => {
      this.offsetTabBar = this.$refs.navbar1.$el.offsetTop
    }, 500)
  },
  activeted() {
    this.$refs.scroll.scrollTo(0, saveY, 0)
  },
  methods: {
    //监听是 展示 pop new ,sell
    change(index) {
      switch (index) {
        case 0:
          this.CurrentType = 'pop'
          break
        case 1:
          this.CurrentType = 'new'
          break
        case 2:
          this.CurrentType = 'sell'
          break
      }
      this.$refs.navbar2.currentindex = index
      this.$refs.navbar1.currentindex = index
    },
    // 返回顶部方法
    btnBackTop() {
      // scrollTo可以接受三个参数第三个表示500毫秒
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 显示与隐藏backTop
    imgshow(position) {
      if (position.y > -614) {
        this.istrue = false
      } else {
        this.istrue = true
      }
      this.saveY = position.y
    },
    //使用上拉加载更多的方法
    loadMore() {
      this.getHomeGood(this.CurrentType)
      this.$refs.scroll.finishPullUp()
    },

    // 网络请求函数
    // 请求数据
    getHomeMutidataSlide() {
      getHomeMutidata().then((res) => {
        this.Slidelist = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    //请求商品数据
    getHomeGood(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
  },
  computed: {
    showgoods() {
      return this.goods[this.CurrentType].list
    },
  },
}
</script>

<style scoped>
.content {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 49px;
  bottom: 49px;
  background-color: #fff;
  overflow: hidden;
}
/*显示与隐藏 */
.isshowimg {
  display: none;
}
.control {
  position: relative;
  margin-top: -1px;
  background-color: #fff;
  z-index: 9999;
}
</style>
