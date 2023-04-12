<script setup lang="ts">
import { provide, ref, readonly } from 'vue'
import GameStage from './components/GameStage.vue'
import HeaderScore from './components/HeaderScore.vue'

const score = ref(0)

provide('score', readonly(score))
</script>

<template>
  <main class="h-screen w-full p-8 flex flex-col items-center">
    <HeaderScore />
    <GameStage />
  </main>
</template>

<style scoped></style>
