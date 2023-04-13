<script setup lang="ts">
import { provide, ref, readonly } from 'vue'
import GameStage from './components/GameStage.vue'
import HeaderScore from './components/HeaderScore.vue'
import RulesButton from './components/RulesButton.vue'
import RulesOverlay from './components/RulesOverlay.vue'

const score = ref(0)
const showRules = ref(false)

provide('score', readonly(score))
</script>

<template>
  <main class="h-screen w-full p-8 flex flex-col items-center">
    <HeaderScore />
    <GameStage />
    <RulesButton @click="showRules = true" />
    <Transition name="rules-slide">
      <RulesOverlay v-if="showRules" @close="showRules = false" />
    </Transition>
  </main>
</template>

<style scoped>
.rules-slide-enter-active,
.rules-slide-leave-active {
  transition: opacity 0.3s ease;
}

.rules-slide-enter-from,
.rules-slide-leave-to {
  opacity: 0;
}
</style>
