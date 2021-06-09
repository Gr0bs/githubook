import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Discover from '../views/Discover'
import Login from '../views/Login'
import ProfilPage from '../views/ProfilPage'
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
    component: Discover,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/user/:username',
    name: 'ProfilPage',
    component: ProfilPage,
    meta: {
      requiresAuth: true
    },
    props : true, // Using the username as props for the API
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if(requiresAuth && !isAuthenticated){
    next({
      path: '/login'
    })
  } else {
    next()
  }
});

export default router
