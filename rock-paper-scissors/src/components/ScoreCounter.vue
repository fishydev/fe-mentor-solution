<script setup lang="ts">
import { inject, type Ref } from 'vue'

const score = inject<Ref<number>>('score')
</script>

<template>
  <div
    id="ScoreCounter"
    class="p-2 bg-white rounded-md flex flex-col justify-center min-h-full min-w-[100px]"
  >
    <span class="uppercase text-score-text text-center">Score</span>
    <span class="text-dark-text text-center text-6xl">{{ score }}</span>
  </div>
</template>
