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
const openProfilePop = () => {
  profilePop.value = !profilePop.value
}
const closeProfilePop = () => {
  profilePop.value = false
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
  <div class="h-14 w-full border-b drop-shadow-sm flex justify-center items-center">
    <div class="sm:w-9/12 w-full">
      <div class="flex justify-between">
        <div class="flex items-center px-2">
          <img src="../assets/Instagram_logo.svg" alt="" class="w-24">
        </div>
        <div class="flex justify-center" v-if="mq.current !== 'sm'">
          <div class="flex bg-gray-200 rounded-md w-32 px-2">
            <div class="flex items-center">
              <Icon icon="akar-icons:search" width="16"   />
            </div>
            <input type="text" placeholder="Search" class="pl-2 w-24 outline-none rounded-sm bg-gray-200">

          </div>
        </div>
        <div class="flex px-2">
          <div class="pr-2 flex items-center">
            <Icon icon="mdi:home-variant-outline" width="24" />
          </div>
          <div class="px-2 flex items-center">
            <Icon icon="mdi:message-processing-outline" width="24" />
          </div>
          <div class="px-2 flex items-center">
            <Icon icon="mdi:compass-outline" width="24" />
          </div>
          <div class="px-2 flex items-center">
            <Icon icon="mdi:heart-outline" width="24" />
          </div>
          <div class="pl-2 flex flex-col justify-center relative">
            <div class="">
              <img :src="userStore.user?.photoURL" alt="" class="rounded-full w-7 cursor-pointer" :class="`${profilePop? 'outline outline-gray-500': ''}`" @click.self="openProfilePop">
            </div>
            <div v-if="profilePop" class="absolute w-40 top-10 -right-5 border bg-white shadow-sm rounded cursor-pointer" v-click-outside="closeProfilePop">
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
          </div>
        </div>
      </div>

    </div>
  </div>
</template>