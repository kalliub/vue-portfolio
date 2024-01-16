<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="content-title">
    <RouterLink v-if="route.path !== '/'" to="/projects">
      <span class="link-text">
        {{ route.name }}
      </span>
    </RouterLink>

    <span v-else class="link-text">
      {{ route.name }}
    </span>
  </div>
</template>

<style scoped>
.content-title {
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 4px 0px;
  gap: 4px;
  width: 100%;
  /* TODO: implement palette colors with variables */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  background-color: white;
  text-wrap: nowrap;
}

.link-text {
  /* TODO: Implement palette colors with variables */
  /* grey.500 */
  color: 'rgb(61,61,61)';
  line-height: 36px;
}

.back-button {
  transition: 200ms;
}

.back-button:hover {
  transition: 200ms;
  /* TODO: implement palette colors with variables */
  /* primary.700 */
  color: '#465298';
}
</style>
