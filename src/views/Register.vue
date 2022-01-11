<script setup lang="ts">
  import { ref } from 'vue'
  import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
  
  const email = ref<string>('')
  const fullname = ref<string>('')
  const password = ref<string>('')
  const auth:any = getAuth()
  const register = async () => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email.value, password.value)
      console.log(data);
      await updateProfile(auth.currentUser, {
        displayName: fullname.value
      })
      console.log('success update name');
    } catch (error) {
      console.log(error);
    }
    
  }
  
</script>

<template>
  <div class="min-h-screen flex justify-center bg-gray-100 sm:py-16">
    <div class="w-96">
      <div class="sm:bg-white sm:border sm:border-gray-300 sm:px-8 px-6 py-3 mb-3">
        <div class="w-full flex justify-center py-5">
          <img src="../assets/Instagram_logo.svg" alt="" class="w-48">
        </div>
        <div class="text-center font-bold text-gray-500 w-full px-6 mb-3">
          Sign up to see photos and videos from your friends.
        </div>
        <div>
          <div class="flex justify-center mb-3">
            <img src="../assets/btn_google_signin_light_normal_web@2x.png" alt="google" class="w-56">
          </div>
        </div>
        <div class="flex px-3">
          <div class="basis-2/5 flex items-center">
            <div class="border-t w-full"></div>
          </div>
          <div class="basis-1/5 text-gray-500 text-center">OR</div>
          <div class="basis-2/5 flex items-center">
            <div class="border-t w-full"></div>
          </div>
        </div>
        <div>
          <form @submit.prevent="register" class="flex flex-col items-center p-3">
            <div class="mb-3 w-full">
              <input id="email" placeholder="Email" type="email" class="border p-2 w-full text-sm bg-gray-100" v-model="email">
            </div>
            <div class="mb-3 w-full">
              <input id="fullname" placeholder="Full Name" type="text" class="border p-2 w-full text-sm bg-gray-100" v-model="fullname">
            </div>
            <div class="mb-3 w-full">
              <input type="password" placeholder="Password" class="border p-2 w-full text-sm bg-gray-100" v-model="password">
            </div>
            <div class="w-full">
              <button class="py-1 w-full bg-blue-500 text-white border rounded">Sign Up</button>
            </div>
          </form>
        </div>
        <div class="text-center px-3 text-xs mb-12 text-gray-500">
          By signing up, you agree to our <span class="font-bold">Terms Data Policy</span> and Cookies Policy
        </div>
      </div>
      <div class="py-5 w-100 text-center text-sm sm:bg-white sm:border sm:border-gray-300">
        Have an account? <span class="text-blue-400 cursor-pointer" @click="$router.push({ path: '/login' })">Log in</span>
      </div>
    </div>
  </div>
</template>