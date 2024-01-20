<script setup lang="ts">
import Button from 'primevue/button'
import { useRoute } from 'vue-router'
import Icon from './Icon.vue'
import { computed } from 'vue'

const route = useRoute()

const hideButtons = computed(() => route.name === '404')

const buttons = {
  '/': {
    name: 'About me',
    icon: 'info-circle',
    condition: (currentPath: string) => currentPath !== '/'
  },
  '/work': {
    name: 'Experience',
    icon: 'bag-alt',
    condition: (currentPath: string) => currentPath !== '/work'
  },
  '/projects': {
    name: 'Projects',
    icon: 'coffee',
    condition: (currentPath: string) =>
      currentPath !== '/projects' && !currentPath.includes('/project/')
  }
}

const filteredButtonsByPathConditions = computed(() => {
  return Object.entries(buttons).filter(([_path, { condition }]) => condition(route.path))
})
</script>

<template>
  <div class="container" v-if="!hideButtons">
    <RouterLink
      v-for="[path, { name, icon }] of filteredButtonsByPathConditions"
      :key="path"
      :to="path"
    >
      <Button>
        <Icon :name="icon" style="margin-right: 8px" />
        {{ name }}
      </Button>
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  position: sticky;
  display: flex;
  bottom: 0;
  left: 64;
  padding: 16px 0px;
  background-color: white;
  gap: 16px;
}

@media screen and (max-width: 768px) {
  a,
  button {
    width: 100%;
    justify-content: center;
  }
}
</style>
