<script setup lang="ts">
import { useRoute } from 'vue-router'
import Icon from './Icon.vue'

const route = useRoute()
const isProjectPage = () => /^\/project\/.+$/g.test(route.fullPath)
</script>

<template>
  <div class="content-title">
    <RouterLink v-if="isProjectPage()" to="/projects">
      <Icon name="angle-left" class="link-text" style="margin-right: 8px" />
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
  border-bottom: 1px solid var(--grey-200);
  position: sticky;
  top: 0;
  background-color: white;
  text-wrap: nowrap;
}

.link-text {
  color: var(--grey-500);
  line-height: 36px;
}

.back-button {
  transition: 200ms;
}

.back-button:hover {
  transition: 200ms;
  color: var(--primary-700);
}
</style>
