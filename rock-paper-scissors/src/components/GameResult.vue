<script setup lang="ts">
defineProps<{
  result: string | undefined
}>()

defineEmits<{
  (e: 'play-again'): void
}>()
</script>

<template>
  <div class="GameResult flex flex-col gap-8 items-center">
    <span class="text-center text-3xl uppercase font-bold">{{ result }}</span>
    <button
      class="bg-white text-dark-text uppercase py-4 rounded-md w-56"
      @click="$emit('play-again')"
    >
      Play again
    </button>
  </div>
</template>
