<template>
  <div id="tab-bar-item" @click="changeitem" :style="bgcolor">
    <slot name="icon"></slot>
    <slot name="text"> </slot>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default() {
        return "red";
      },
    },
  },
  computed: {
    bgcolor() {
      if (this.path == this.$route.path) return { color: this.activeColor };
    },
  },
  methods: {
    changeitem() {
      if (this.path != this.$route.path) return this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
#tab-bar-item {
  font-family: "icomoon";
  flex: 1;
  height: 100%;
  font-size: 16px;
  text-align: center;
}
</style>