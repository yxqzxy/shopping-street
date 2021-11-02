<template>
  <div>
    <nav-bar class="bgc">
      <div slot="left" @click="back"><h3 class="lt">&lt;</h3></div>
      <div slot="center" class="center">
        <div
          class="flex"
          v-for="(item, index) in title"
          @click="btnclick(index)"
          :class="{ red: currentindex === index }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../../components/common/commonNavBar'
export default {
  name: 'detailchild',
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentindex: 0,
    }
  },
  components: {
    NavBar,
  },
  methods: {
    btnclick(index) {
      this.currentindex = index
    },
    back() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
.red {
  color: red;
}
.center {
  display: flex;
}
.flex {
  flex: 1;
  text-align: center;
  font-size: 16px;
  line-height: 44px;
}
.lt {
  text-align: center;
  line-height: 44px;
}
.bgc {
  background-color: #fff;
}
</style>