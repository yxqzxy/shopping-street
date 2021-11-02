<template>
  <div>
    <tab-bar-control
      :titles="['流行', '新款', '精选']"
      ref="tabcontrol2"
      @btnclick="btnclick"
    >
    </tab-bar-control>
  </div>
</template>

<script>
import TabBarControl from '../../../components/content/tabControl/TabControl.vue'
export default {
  components: {
    TabBarControl,
  },
  methods: {
    btnclick(index) {
      this.$emit('index', index)
    },
  },
}
</script>

<style>
</style>
    TabBar