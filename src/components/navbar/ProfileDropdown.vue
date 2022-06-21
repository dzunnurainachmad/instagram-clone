<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useMq } from 'vue3-mq'
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "vue-router"
const mq = useMq()
const userStore = useUserStore()
const profilePop = ref(false)
const profilePopToggle = () => {
  profilePop.value = !profilePop.value
}

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
  <div class="w-6" >
    <img v-if="userStore.user?.photoURL" :src="userStore.user?.photoURL" alt="" class="rounded-full w-6 cursor-pointer" :class="`${profilePop? 'outline outline-gray-500': ''}`" @click.self="profilePopToggle" >
    <div v-else >
      <Icon icon="gg:profile" width="24" @click.prevent.self="profilePopToggle" />
    </div>
  </div>
  <div v-if="profilePop" class="absolute w-40 top-10 -right-5 border bg-white shadow-sm rounded cursor-pointer" v-click-outside="profilePopToggle">
    <div class="py-2 px-2 flex hover:bg-gray-100">
      <Icon icon="iconoir:profile-circled" width="20" />
      <div class="pl-2 text-sm">Profile</div>
    </div>
    <div class="py-2 px-2 flex hover:bg-gray-100">
      <Icon icon="mdi:bookmark-outline" width="20" />
      <div class="pl-2 text-sm">Saved</div>
    </div>
    <div class="py-2 px-2 flex hover:bg-gray-100">
      <Icon icon="mdi:cog" width="20" />
      <div class="pl-2 text-sm">Settings</div>
    </div>
    <div class="py-2 px-2 flex hover:bg-gray-100 border-t" @click="logout">
      <div class="text-sm">Log Out</div>
    </div>
  </div>
</template>