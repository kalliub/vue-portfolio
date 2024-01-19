<script setup lang="ts">
import type { GithubRepo } from '@/types/github'
import { formatRepoName } from '@/utils/github'
import { inject, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const repos = inject<Ref<GithubRepo[]>>('repos')
const route = useRoute()

const currentRepo = repos?.value.find((repo) => repo.name === route.params.projectName)
</script>

<template>
  <div v-if="currentRepo">
    <h1 style="text-transform: capitalize">{{ formatRepoName(currentRepo.name) }}</h1>

    <span class="body1">
      {{ currentRepo.description }}
    </span>
  </div>
</template>

<style scoped></style>
