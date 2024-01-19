<script setup lang="ts">
import { defineProps } from 'vue'
const { label } = defineProps<{ label: string }>()
</script>

<template>
  <div class="container">
    <span class="caption">
      {{ label }}
    </span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  padding: 4px 8px;
  background-color: var(--grey-100);
  border-radius: 16px;
  width: fit-content;
  height: fit-content;
}

span {
  text-transform: capitalize;
  line-height: normal;
  color: var(--grey-900);
}
</style>
