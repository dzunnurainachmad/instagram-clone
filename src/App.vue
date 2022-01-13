<script setup lang="ts">
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { onMounted } from 'vue';
import router from './router';
import { useUserStore } from './stores/user';
import { useMq } from 'vue3-mq'
const mq = useMq()
onMounted(() => {
  const auth = getAuth()
  const userStore = useUserStore()
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user, 'user');
      userStore.user = user
    } else {
      router.push({ name: 'Login'})
    }
  })
  console.log(mq.current, 'mq.current');
  
})
</script>

<template>
  <router-view />
</template>

<style>
@import '@/assets/base.css';
</style>
