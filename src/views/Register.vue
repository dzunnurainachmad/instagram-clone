<script setup lang="ts">
  import { ref } from 'vue'
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  const email = ref<string>('')
  const password = ref<string>('')
  const auth = getAuth()
  const register = async () => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email.value, password.value)
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
    
  }
  
</script>

<template>
  <div>
    <div>
      REGISTER
    </div>
    <div>
      <form @submit.prevent="register" class="w-80 p-3">
        <div class="mb-3">
          <label for="email">Email</label>
          <input id="email" type="email" class="border rounded py-2 px-3" v-model="email">
        </div>
        <div class="mb-3">
          <label for="password">Password</label>
          <input type="password" class="border rounded py-2 px-3" v-model="password">
        </div>
        <div class="">
          <button class="p-2 border rounded">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>