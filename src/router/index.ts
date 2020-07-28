import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

// routes是一组路由，相当于定义一组映射关系（哪一个路由指向哪一个具体的内容）。里面的每一个对象，都是单独的一条路由，也就是官方说的route。
  const routes: Array<RouteConfig> = [
    // 这里是将根目录重定向到首页
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children:[{
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

// router是一个机制，相当于管理者，用来管理路由。routes定义了一组路由，当用户真正点击一个路由的时候，是由router去routes中找到这个路由。
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
