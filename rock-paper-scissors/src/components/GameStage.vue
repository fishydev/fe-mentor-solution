<script setup lang="ts">
import PlayButton from './PlayButton.vue'
</script>

<template>
  <div id="GameStage" class="mt-24">
    <div class="relative">
      <img src="/images/bg-triangle.svg" class="p-16" />
      <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
        <div class="flex justify-between">
          <PlayButton value="rock" />
          <PlayButton value="paper" />
        </div>
        <div class="flex justify-center">
          <PlayButton value="scissors" />
        </div>
      </div>
    </div>
  </div>
</template>
