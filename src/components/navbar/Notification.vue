<script setup lang="ts">

// Implement v-click-outside to hide element by change style to display:none (v-show)
// when we open notification by clicking icon, use @click.stop to stop propagation / not to triggering the v-click-outside

import { useUserStore } from '@/stores/user';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useMq } from 'vue3-mq'
const mq = useMq()

const userStore = useUserStore()
const notificationPop = ref(false)

const notificationToggle = () => {
  notificationPop.value = !notificationPop.value
}
const closeNotification = () => {
  // check if state notificationPop is true (show) then we hide the element  
  if (notificationPop.value) notificationPop.value = false
}

</script>
<template>
  <div class="w-6 cursor-pointer" >
    <Icon icon="mdi:heart-outline" width="24" @click.stop="notificationToggle" />
  </div>
  <div v-show="notificationPop" :class="`absolute w-40 top-10 -right-5 border bg-white shadow-sm rounded cursor-pointer`" v-click-outside="closeNotification">
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
    <div class="py-2 px-2 flex hover:bg-gray-100 border-t">
      <div class="text-sm">Log Out</div>
    </div>
  </div>
</template>