<template>
  <!-- 主题控制栏 -->
  <div id="mainTabBar">
    <tab-bar>
      <tabbar-item path="/home" activeColor="deeppink">
        <div slot="icon">
          <h3></h3>
        </div>
        <div slot="text">
          <span>首页</span>
        </div>
      </tabbar-item>

      <tabbar-item path="/categroise" activeColor="deeppink">
        <div slot="icon">
          <h3></h3>
        </div>
        <div slot="text">
          <span>分类</span>
        </div>
      </tabbar-item>

      <tabbar-item path="/cart" activeColor="deeppink">
        <div slot="icon">
          <h3></h3>
        </div>
        <div slot="text">
          <span>购物车</span>
        </div>
      </tabbar-item>

      <tabbar-item path="/user" activeColor="deeppink">
        <div slot="icon">
          <h3></h3>
        </div>
        <div slot="text">
          <span>我的</span>
        </div>
      </tabbar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../../common/tabBar/tabBar.vue";
import TabbarItem from "../../common/tabBar/tabBar-item.vue";

export default {
  components: {
    TabBar,
    TabbarItem,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "icomoon";
  src: url("../../../assets/css/fonts/icomoon.eot?1xzqwy");
  src: url("../../../assets/css/fonts/icomoon.eot?1xzqwy#iefix")
      format("embedded-opentype"),
    url("../../../assets/css/fonts/icomoon.ttf?1xzqwy") format("truetype"),
    url("../../../assets/css/fonts/icomoon.woff?1xzqwy") format("woff"),
    url("../../../assets/css/fonts/icomoon.svg?1xzqwy#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.mainTabBar {
  width: 100%;
}
div h3 {
  margin-top: 4px;
}
</style>