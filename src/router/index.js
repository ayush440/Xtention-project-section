import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/terms-and-conditions',
    name: 'terms-and-conditions',
    component: () => import('@/views/TermsAndConditionsView.vue')
  },
  {
    path: '/ThankYou',
    name: 'ThankYou',
    component: () => import('@/views/ThankYou.vue')
  },
 
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})

export default router