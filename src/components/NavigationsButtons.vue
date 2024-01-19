<script setup lang="ts">
import Button from 'primevue/button'
import { useRoute } from 'vue-router'
import Icon from './Icon.vue'
import { computed } from 'vue'

const route = useRoute()

const hideButtons = computed(() => route.name === '404')
</script>

<template>
  <div class="container" v-if="!hideButtons">
    <RouterLink to="/" v-if="route.path !== '/'">
      <Button>
        <Icon name="info-circle" style="margin-right: 8px" />
        About me
      </Button>
    </RouterLink>

    <RouterLink to="/work" v-if="route.path !== '/work'">
      <Button>
        <Icon name="bag-alt" style="margin-right: 8px" />
        Work
      </Button>
    </RouterLink>

    <RouterLink
      to="/projects"
      v-if="route.path !== '/projects' && !route.path.includes('/project/')"
    >
      <Button>
        <Icon name="coffee" style="margin-right: 8px" />
        Projects
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
  /* TODO: Implement breakpoints */
}
.link {
  /* TODO: Implement breakpoints */
}
</style>
