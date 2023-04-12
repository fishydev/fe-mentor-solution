<script setup lang="ts">
import ScoreCounter from './ScoreCounter.vue'
</script>

<template>
  <div
    id="HeaderScore"
    class="p-4 border-2 border-header-outline rounded-lg flex justify-between w-full"
  >
    <img src="/images/logo.svg" alt="logo" />
    <ScoreCounter />
  </div>
</template>
