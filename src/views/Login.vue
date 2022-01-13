<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const email = ref<string>('')
const password = ref<string>('')
const auth = getAuth()
const router = useRouter()
const provider = new GoogleAuthProvider();
const login = async () => {
  try {
    await setPersistence(auth, browserSessionPersistence)
    const data = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log(data);
    const userStore = useUserStore()
    const current = auth.currentUser
    userStore.user = current
    router.push({ name: "Home" })
  } catch (error) {
    console.log(error);
  }
  
}

const loginGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    console.log(result, 'asdfasdf');
    const credential: any = GoogleAuthProvider.credentialFromResult(result)
    const token = credential.accessToken
    const user = result.user
    router.push({ name: "Home" })
    
  } catch (error: any) {
    const errorCode = error.code
    const erroMessage = error.message
    const email = error.email
    const credential = GoogleAuthProvider.credentialFromError(error)
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
        <div>
          <form @submit.prevent="login" class="flex flex-col items-center p-3">
            <div class="mb-3 w-full">
              <input id="email" placeholder="Email" type="email" class="border p-2 w-full text-sm" v-model="email">
            </div>
            <div class="mb-3 w-full">
              <input type="password" placeholder="Password" class="border p-2 w-full text-sm" v-model="password">
            </div>
            <div class="w-full">
              <button class="py-1 w-full bg-blue-500 hover:bg-blue-400 text-white border rounded">Login</button>
            </div>
          </form>
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
          <div class="flex justify-center mb-3">
            <img @click.prevent="loginGoogle" src="../assets/btn_google_signin_light_normal_web@2x.png" alt="google" class="w-56">
          </div>
        </div>
        
      </div>
      <div class="py-5 w-100 text-center text-sm sm:bg-white sm:border sm:border-gray-300">
        Don't have an account? <span class="text-blue-400 cursor-pointer" @click="$router.push({ path: '/register' })">Sign Up</span>
      </div>
    </div>
  </div>
</template>