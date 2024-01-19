<script setup lang="ts">
import GithubRepoCard from '@/components/GithubRepoCard.vue'
import type { GithubRepo } from '@/types/github'
import { inject } from 'vue'

const githubRepos = inject<GithubRepo[]>('repos')
</script>

<template>
  <div v-if="githubRepos" class="container">
    <GithubRepoCard v-for="repo in githubRepos" :key="repo.id" v-bind="repo" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding-top: 16px;
}
</style>
