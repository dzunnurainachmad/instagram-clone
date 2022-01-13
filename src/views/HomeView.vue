<script setup lang="ts">
import {  onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut, updateCurrentUser } from "firebase/auth"
import { useRouter } from "vue-router"

const router = useRouter()
const auth = getAuth()
const logout = () => {
  signOut(auth)
    .then(() => {
      console.log('success logout');
      router.push({ name: "Login" })
    })
    .catch((error) => {
      console.log(error);
    })


}

</script>

<template>
  <main>
    <div>
      <button class="border p-2 rounded" @click="logout">Logout</button>
    </div>
  </main>
</template>
