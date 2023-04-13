<script setup lang="ts">
defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div
    class="RulesOverlay flex bg-white flex-col absolute top-0 w-full h-full items-center px-8 py-24 justify-between"
  >
    <h1 class="uppercase text-3xl font-bold text-dark-text">Rules</h1>
    <div>
      <img
        src="/images/image-rules.svg"
        alt="rule. paper beats rock, rock beats scissors, scissors beat paper"
      />
    </div>
    <button @click="$emit('close')">
      <img src="/images/icon-close.svg" alt="" />
    </button>
  </div>
</template>
