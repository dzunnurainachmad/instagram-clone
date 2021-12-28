<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref<string>('')
const password = ref<string>('')
const auth = getAuth()
const router = useRouter()

const login = async () => {
  try {
    const data = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log(data);
    router.push({ name: "Home" })
  } catch (error) {
    console.log(error);
  }
  
}
  
</script>

<template>
  <div>
    <div>
      LOGIN
    </div>
    <div>
      <form @submit.prevent="login" class="w-80 p-3">
        <div class="mb-3">
          <label for="email">Email</label>
          <input id="email" type="email" class="border rounded py-2 px-3" v-model="email">
        </div>
        <div class="mb-3">
          <label for="password">Password</label>
          <input type="password" class="border rounded py-2 px-3" v-model="password">
        </div>
        <div class="">
          <button class="p-2 border rounded">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>