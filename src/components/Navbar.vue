<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useMq } from 'vue3-mq'
const mq = useMq()
const userStore = useUserStore()


</script>
<template>
  <div class="h-14 w-full border-b drop-shadow-sm flex justify-center items-center">
    <div class="sm:w-9/12 w-full">
      <div class="flex justify-between">
        <div class="flex items-center px-2">
          <img src="../assets/Instagram_logo.svg" alt="" class="w-24">
        </div>
        <div class="flex justify-center" v-if="mq.current !== 'sm'">
          <div class="flex bg-gray-200 rounded-md w-28 px-2">
            <div class="flex items-center">
              <Icon icon="akar-icons:search" width="16"   />
            </div>
            <input type="text" placeholder="search" class="pl-2 w-20 rounded-sm bg-gray-200">

          </div>
        </div>
        <div class="flex px-2">
          <div class="pr-2 flex items-center">
            <Icon icon="mdi:home-variant-outline" width="26" />
          </div>
          <div class="px-2 flex items-center">
            <Icon icon="mdi:message-processing-outline" width="26" />
          </div>
          <div class="px-2 flex items-center">
            <Icon icon="mdi:compass-outline" width="26" />
          </div>
          <div class="px-2 flex items-center">
            <Icon icon="mdi:heart-outline" width="26" />
          </div>
          <div class="pl-2 flex items-center">
            <img :src="userStore.user?.photoURL" alt="" class="rounded-full w-8">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>