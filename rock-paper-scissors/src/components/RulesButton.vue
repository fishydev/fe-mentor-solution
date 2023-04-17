<script setup lang="ts">
defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    class="rounded-md uppercase border-2 px-8 py-3 mt-28 md:absolute md:bottom-8 md:right-8"
    @click="$emit('click')"
  >
    rules
  </button>
</template>
