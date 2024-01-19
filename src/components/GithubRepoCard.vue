<script setup lang="ts">
import type { GithubRepo } from '@/types/github'
import { DateTime } from 'luxon'
import { defineProps } from 'vue'
import Icon from './Icon.vue'
import GithubTopic from './GithubTopic.vue'

const { name, created_at, language, topics, homepage, html_url } = defineProps<GithubRepo>()

const formatRepoName = (repoName: string) => repoName.replace(/-/g, ' ')
</script>

<template>
  <div class="card">
    <div style="display: flex">
      <div style="display: flex; flex: 1 0 0; flex-direction: column">
        <RouterLink :to="`/project/${name}`">
          <h6 class="subtitle1" style="margin: 0">
            {{ formatRepoName(name) }}
          </h6>
        </RouterLink>

        <span class="caption">
          {{ DateTime.fromISO(created_at).year }} {{ language ? `| ${language}` : '' }}
        </span>
      </div>

      <div style="display: flex; flex: 1 0 0; flex-wrap: wrap; gap: 4px; justify-content: flex-end">
        <GithubTopic v-for="topic in topics" v-bind:key="topic" :label="topic" />
      </div>
    </div>

    <div style="display: flex; gap: 4px">
      <a :href="html_url || '#'" class="link" target="_blank">
        <Icon name="github-alt" size="medium" />
      </a>

      <a v-if="homepage" :href="homepage" target="_blank" class="link">
        <Icon name="external-link-alt" size="medium" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--grey-100);
  border-radius: 8px;
  padding: 16px;
  gap: 12px;
}

.link {
  margin-right: 8px;
  transition: 200ms;
}
.link:hover {
  transform: scale(1.2);
  transition: 200ms;
}

.subtitle1 {
  text-transform: capitalize;
  color: var(--primary-900);
}

.subtitle1:hover {
  text-decoration: underline;
}

.caption {
  color: var(--grey-500);
}
</style>
