<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsitem.show.img" @load="imgload" />
    <div class="goods-info">
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <span class="collect">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsitem: {
      type: Object,
      default: {},
    },
  },
  methods: {
    imgload() {
      this.$bus.$emit('imgLoad')
    },
    itemClick() {
      console.log(this.goodsitem)
      this.$router.push('/detail/' + this.goodsitem.iid)
    },
  },
}
</script>

<style>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}
</style>