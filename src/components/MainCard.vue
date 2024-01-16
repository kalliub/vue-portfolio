<script setup lang="ts"></script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  border-radius: 12px 8px 8px 12px;
  box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 80vh;
  width: 100vw;
  max-width: 1000px;
  transition: all 0.1s;
  transform-style: preserve-3d;
  background-color: transparent;
  /* TODO: Implement brakpoints */
}

.contentContainer {
  overflow: auto;
  flex-grow: 1;
  width: 100%;
  align-content: flex-start;
  padding-bottom: 16px;
}
</style>
