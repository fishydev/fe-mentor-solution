<script setup lang="ts">
import clsx from 'clsx'
import { ref } from 'vue'

defineProps<{
  value: 'rock' | 'paper' | 'scissors'
}>()

const pressed = ref(false)

const pressButton = () => {
  pressed.value = true
  setTimeout(() => {
    pressed.value = false
  }, 400)
}
</script>

<template>
  <button
    class="PlayButton flex items-center justify-center relative w-36 h-36"
    @click="pressButton"
  >
    <div
      :class="
        clsx(
          'absolute w-full h-full rounded-full btn-shadow',
          value,
          pressed ? 'pressed-shadow' : ''
        )
      "
    ></div>
    <div
      :class="
        clsx(
          'absolute rounded-full w-28 h-28 flex items-center justify-center bg-white p-4',
          pressed ? 'pressed' : ''
        )
      "
    >
      <img :src="`/images/icon-${value}.svg`" alt="" />
    </div>
  </button>
</template>

<style scoped>
.btn-shadow {
  box-shadow: 0 10px;
}

.paper {
  background: radial-gradient(hsl(230deg 89% 62%), hsl(230deg 89% 65%));
  color: hsl(230deg 89% 52%);
}

.scissors {
  background: radial-gradient(hsl(39deg 89% 49%), hsl(40deg 84% 53%));
  color: hsl(39deg 89% 39%);
}

.rock {
  background: radial-gradient(hsl(349deg 71% 52%), hsl(349deg 70% 56%));
  color: hsl(349deg 71% 42%);
}

.pressed {
  animation: pressed 0.3s linear both;
}

.pressed-shadow {
  animation: pressed-shadow 0.3s linear both;
}

@keyframes pressed {
  20%,
  80% {
    transform: translateY(5px);
  }

  50% {
    transform: translateY(8px);
  }
}

@keyframes pressed-shadow {
  20%,
  80% {
    transform: translateY(5px);
    box-shadow: 0 5px;
  }

  50% {
    transform: translateY(8px);
    box-shadow: 0 2px;
  }
}
</style>
