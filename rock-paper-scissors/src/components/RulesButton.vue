<script setup lang="ts">
defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button class="rounded-md uppercase border-2 px-8 py-3 mt-28" @click="$emit('click')">
    rules
  </button>
</template>
