<script setup lang="ts">
import Button from 'primevue/button'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="container">
    <RouterLink v-if="route.path !== '/'" to="/">
      <Button>About me</Button>
    </RouterLink>

    <RouterLink v-if="route.path !== 'work'" to="/">
      <Button>About me</Button>
    </RouterLink>

    <RouterLink v-if="route.path !== '/projects' && route.path.includes('/project/')" to="/">
      <Button label="About me" />
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
  /* TODO: Implement breakpoints */
}
.link {
  /* TODO: Implement breakpoints */
}
</style>
