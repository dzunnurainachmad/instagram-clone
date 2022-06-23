<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useMq } from 'vue3-mq'
import ProfileDropdown from "./navbar/ProfileDropdown.vue"
import Notification from './navbar/Notification.vue';
const mq = useMq()
</script>
<template>
  <div class="h-14 border-b drop-shadow-sm flex justify-center items-center w-full">
    <div class="flex justify-center items-center width-container">
      <div class="flex w-11/12 justify-between">
        <div :class="`relative flex items-center px-2 basis-1/2 sm:basis-1/3 overflow-hidden h-10`">
          <div class="absolute w-24">
            <img src="../assets/Instagram_logo.svg" alt="instagram" class="w-24 object-cover">
          </div>
        </div>
        <div :class="`flex justify-center sm:basis-1/3`" v-if="mq.current !== 'sm'">
          <div class="flex bg-gray-200 rounded-md w-56 px-2">
            <div class="flex items-center">
              <Icon icon="akar-icons:search" width="16"   />
            </div>
            <input type="text" placeholder="Search" class="pl-2 w-48 outline-none rounded-sm bg-gray-200">

          </div>
        </div>
        <div :class="`flex justify-end px-2 basis-1/2 sm:basis-1/3`">
          <div class="px-2 flex items-center">
            <Icon icon="mdi:home-variant-outline" width="24" />
          </div>
          <div class="px-2 flex items-center">
            <Icon icon="mdi:message-processing-outline" width="24" />
          </div>
          <div class="px-2 flex items-center">
            <Icon icon="mdi:compass-outline" width="24" />
          </div>
          <div class="px-2 flex items-center relative">
            <Notification/>
          </div>
          <div class="px-2 flex flex-col justify-center relative">
            <ProfileDropdown/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
.width-container {
  width: 64rem;
}
</style>