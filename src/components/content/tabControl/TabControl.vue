<template>
  <!-- 这是新品，流行等组件 -->
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      class="tab-control-item"
      :class="{ active: index === currentindex }"
      @click="click(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TabCotorl',
  data() {
    return {
      currentindex: 0,
    }
  },
  methods: {
    click(index) {
      this.currentindex = index
      this.$emit('btnclick', index)
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 16px;
}
.tab-control-item span {
  padding: 5px;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid #ff5777;
}
</style>
