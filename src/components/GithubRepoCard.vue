<script setup lang="ts">
import type { GithubRepo } from '@/types/github'
import { DateTime } from 'luxon'
import { defineProps } from 'vue'
import Icon from './Icon.vue'
import GithubTopic from './GithubTopic.vue'
import { formatRepoName } from '@/utils/github'

const { name, created_at, language, topics, homepage, html_url } = defineProps<GithubRepo>()
</script>

<template>
  <div class="card">
    <div style="display: flex">
      <div class="title-subtitle-container">
        <RouterLink :to="`/project/${name}`">
          <h6 class="subtitle1" style="margin: 0">
            {{ formatRepoName(name) }}
          </h6>
        </RouterLink>

        <span class="caption">
          {{ DateTime.fromISO(created_at).year }} {{ language ? `| ${language}` : '' }}
        </span>
      </div>

      <div class="topics-container">
        <GithubTopic v-for="topic in topics" v-bind:key="topic" :label="topic" />
      </div>
    </div>

    <div class="github-preview-container">
      <a :href="html_url || '#'" class="link" target="_blank" v-tooltip.top="'View on GitHub'">
        <Icon name="github-alt" size="medium" />
      </a>

      <a
        v-if="homepage"
        :href="homepage"
        target="_blank"
        class="link"
        v-tooltip.top="'Open live preview on a new tab'"
      >
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
.title-subtitle-container {
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
}

.topics-container {
  display: flex;
  flex: 1 0 0;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;
}

.github-preview-container {
  display: flex;
  gap: 4px;
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
