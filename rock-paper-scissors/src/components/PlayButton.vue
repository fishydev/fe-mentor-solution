<script setup lang="ts">
import clsx from 'clsx'
import { ref } from 'vue'

const props = defineProps<{
  value: 'rock' | 'paper' | 'scissors'
  result?: boolean
  isWin?: boolean
}>()

const emit = defineEmits<{
  (e: 'click', value: 'rock' | 'paper' | 'scissors'): void
}>()

const pressed = ref(false)

const pressButton = () => {
  if (!props.result) {
    pressed.value = true
    setTimeout(() => {
      pressed.value = false
      emit('click', props.value)
    }, 400)
  }
}
</script>

<template>
  <button
    :class="clsx('PlayButton flex items-center justify-center relative w-36 h-36 md:w-48 md:h-48')"
    @click="pressButton"
    :disabled="result"
  >
    <div :class="clsx('absolute w-4/5 h-4/5 rounded-full', isWin ? 'win' : '')"></div>
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
          'absolute rounded-full flex items-center justify-center bg-white p-4 w-28 h-28 md:w-40 md:h-40',
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

.win {
  animation: 1s ease 0s 1 normal forwards running winning;
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

@keyframes winning {
  100% {
    box-shadow: rgba(255, 255, 255, 0.04) 0px 0px 0px 40px,
      rgba(255, 255, 255, 0.04) 0px 0px 0px 80px, rgba(255, 255, 255, 0.02) 0px 0px 0px 120px;
    transform: scale(1.1);
  }
}
</style>
