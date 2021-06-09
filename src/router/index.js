import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Discover from '../views/Discover'
import Login from '../views/Login'
import ProfilPage from '../views/ProfilPage'
import SignIn from '../views/SignIn'
import firebase from 'firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
    
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


router.beforeEach(async (to, from, next) => {
  let requiresAuth = false
  firebase.auth().onAuthStateChanged(user => {
    if(!user){
      next('login')
    } else {
      requiresAuth = true
      next()
    }
  })
})

export default router
