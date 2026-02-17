import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/files',
    name: 'files',
    component: () => import('../views/FileView.vue')
  },
  {
    path: '/tutorials',
    name: 'tutorials',
    component: () => import('../views/TutorialsView.vue')
  },
  {
    path: '/edits',
    name: 'edits',
    component: () => import('../views/TutorialsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
