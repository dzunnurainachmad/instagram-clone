import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'
import './firebase.ts'
import { useUserStore } from './stores/user'


const app = createApp(App)

app.use(createPinia())

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.name !== 'Login' && !userStore.user) next({ name: "Login" })
  else next()
})


app.use(router)


app.mount('#app')
