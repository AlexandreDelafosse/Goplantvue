import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AllUsers from "@/components/AllUsers.vue"
import AllPosts from "@/components/AllPosts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    // {
    //   path: '/user/:id',
    //   name: 'user',
    //   component: UserInfo
    // },
    {
      path: '/user',
      name: 'users',
      component: AllUsers
    },
    {
      path: '/post',
      name: 'posts',
      component: AllPosts
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
