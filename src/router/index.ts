import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})



const auth = getAuth()

router.beforeEach(async (to, from, next) => {
  let userFirebase = null
  await onAuthStateChanged(auth, user => userFirebase = user)
  console.log(userFirebase, 'userFirebase');
  const userStore = useUserStore()
  console.log(userStore, 'userStore');
  userStore.user = userFirebase
  if (to.meta.requiresAuth && !userFirebase) next('/login')
  else next()
})


export default router
