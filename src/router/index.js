import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Discover from '../views/Discover'
import Login from '../views/Login'
import ProfilPage from '../views/ProfilPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user/:username',
    name: 'ProfilPage',
    component: ProfilPage,
    props : true // Using the username as props for the API
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
