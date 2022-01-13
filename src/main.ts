import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Vue3Mq } from 'vue3-mq'
import './firebase.ts'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Vue3Mq, {
  breakpoints: {
    sm: 0,
    md: 640,
    xl: 1024
  }
})

app.mount('#app')
