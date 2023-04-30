import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const CustomizeView = () => import('@/views/CustomizeView.vue')
const TemplateView = () => import('@/views/TemplateView.vue')
const PricingView = () => import('@/views/PricingView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/template',
      name: 'TemplateView',
      component: TemplateView
    },
    {
      path: '/customize',
      name: 'CustomizeView',
      component: CustomizeView
    },
    {
      path: '/pricing',
      name: 'PricingView',
      component: PricingView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
