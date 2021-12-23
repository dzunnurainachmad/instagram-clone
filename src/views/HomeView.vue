<script setup lang="ts">
import {  ref } from 'vue';

const msg = ref('Hello')
const change = (val: string) => msg.value = val

</script>

<template>
  <main>
    <div @click="change('asdf')">
      {{msg}}
    </div>
  </main>
</template>
