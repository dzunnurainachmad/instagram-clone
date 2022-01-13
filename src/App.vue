<script setup lang="ts">
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { onMounted } from 'vue';
import router from './router';
import { useUserStore } from './stores/user';
onMounted(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user, 'user');
      
    } else {
      router.push({ name: 'Login'})
    }
  })
})
</script>

<template>
  <router-view />
</template>

<style>
@import '@/assets/base.css';
</style>
