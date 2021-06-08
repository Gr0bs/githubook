import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Discover from '../views/Discover'
import Login from '../views/Login'
import ProfilPage from '../views/ProfilPage'
import SignIn from '../views/SignIn'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
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
    props : true, // Using the username as props for the API
    
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
