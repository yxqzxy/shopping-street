<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <b-scroll class="content">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </b-scroll>
  </div>
</template>

<script>
// 请求函数响应
import { getdetail, Shop, Goods, GoodsParam } from '../../../../network/detail'
// 获取组件 顶部导航栏
import DetailNavBar from '../childComp/detchild'
// 轮播图
import DetailSwiper from '../childComp/detailSwiper'
// 商家信息
import DetailShopInfo from '../childComp/DetailShopInfo.vue'
import DetailBaseInfo from '../childComp/DetailBaseInfo.vue'
import DetailParamInfo from '../childComp/DetailParamInfo.vue'
// 滚轮
import BScroll from '../../../../components/common/Bscroll/Bscroll'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      // 商品信息
      detailInfo: {},
      //paramInfo
      paramInfo: {},
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getdetail(this.iid).then((res) => {
      const data = res.result
      this.topImages = res.result.itemInfo.topImages
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      // 创建店铺的信息为对象
      this.shop = new Shop(data.shopInfo)
      // 保存商品的详情数据
      this.detailInfo = data.detailInfo
      // paramInfo
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      )
    })
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailShopInfo,
    DetailBaseInfo,
    BScroll,
    DetailParamInfo,
  },
}
</script>

<style scoped>
.content {
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0px;
  right: 0px;
  overflow: hidden;
}
</style>