<script setup lang="ts">
import clsx from 'clsx'

defineProps<{
  value: 'rock' | 'paper' | 'scissors'
}>()
</script>

<template>
  <div class="PlayButton flex items-center justify-center relative w-36 h-36">
    <div :class="clsx('absolute w-full h-full rounded-full btn-shadow', value)"></div>
    <div
      :class="clsx('absolute rounded-full w-28 h-28 flex items-center justify-center bg-white p-4')"
    >
      <img :src="`/images/icon-${value}.svg`" alt="" />
    </div>
  </div>
</template>

<style scoped>
.btn-shadow {
  box-shadow: 0 8px;
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
</style>
