import Vue from 'vue'
import Router from 'vue-router'

// 导入组件
// home 区域
import Home from './views/home/Home.vue'
// cart区域
import Cart from './views/cart/Cart.vue'
// 分类区域
import Categroies from './views/categroies/Categroies'
// 用户区域
import User from './views/user/User.vue'
// 商品信息
const Detail = () => import('./views/home/children/detail/detail.vue')

Vue.use(Router)


const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/Categroies',
    component: Categroies
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
]
const router = new Router({
  routes,
  mode: 'history'
})
export default router