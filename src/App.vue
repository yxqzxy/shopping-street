<template>
  <div id="app">
    <!-- 想要拒接deatil.vue就需要给取名 然后拒绝这个名字 -->
    <keep-alive exclude="Detail"> <router-view></router-view></keep-alive>
    <main-tab-bar-control></main-tab-bar-control>
  </div>
</template>

<script>
import MainTabBarControl from './components/content/maniTabBarControl/MainTabControl.vue'

export default {
  name: 'app',
  components: {
    MainTabBarControl,
  },
}
</script>

<style scoped>
@import './assets/css/base.css';
</style>
