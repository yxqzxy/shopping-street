<template>
  <div id="recommend">
    <div v-for="item in recommend" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <h6>{{ item.title }}</h6>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: Array,
  },
}
</script>

<style scoped>
#recommend {
  display: flex;
  width: 100%;
  height: 140px;
  border-bottom: #f6f6f6 solid 20px;
}
#recommend div {
  flex: 1;
  width: 90%;
  height: 90%;
  text-align: center;
}
#recommend div a img {
  width: 95%;
  height: 85%;
  vertical-align: middle;
}
</style>