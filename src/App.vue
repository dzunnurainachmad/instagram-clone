<script setup lang="ts">
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { onMounted } from 'vue';
import { useUserStore } from './stores/user'
const auth = getAuth()
const userStore = useUserStore()
onMounted(() => {
  onAuthStateChanged(auth, user => {
    if (user) {
      userStore.user = user
      console.log(user, 'user');
      
    } else {
      console.log('not logged in');
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
