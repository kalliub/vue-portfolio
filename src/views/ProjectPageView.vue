<script setup lang="ts">
import GithubTopic from '@/components/GithubTopic.vue'
import Icon from '@/components/Icon.vue'
import type { GithubRepo } from '@/types/github'
import { formatRepoName } from '@/utils/github'
import { inject, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const repos = inject<Ref<GithubRepo[]>>('repos')
const route = useRoute()

const currentRepo = repos?.value.find((repo) => repo.name === route.params.projectName)
</script>

<template>
  <div v-if="currentRepo" class="container">
    <h1>{{ formatRepoName(currentRepo.name) }}</h1>

    <div class="topics-container">
      <GithubTopic
        v-for="topic in [currentRepo.language, ...currentRepo.topics]"
        v-bind:key="topic"
        :label="topic"
      />
    </div>

    <div class="github-preview-container">
      <a
        :href="currentRepo.html_url || '#'"
        class="link"
        target="_blank"
        v-tooltip.top="'View on GitHub'"
      >
        <Icon name="github-alt" size="medium" />
      </a>

      <a
        v-if="currentRepo.homepage"
        :href="currentRepo.homepage"
        target="_blank"
        class="link"
        v-tooltip.top="'Open live preview on a new tab'"
      >
        <Icon name="external-link-alt" size="medium" />
      </a>
    </div>

    <span class="body">
      {{ currentRepo.description }}
    </span>
  </div>

  <div v-else class="container">
    <h1>Project not found</h1>
    <span class="body" style="margin-bottom: 16px"
      >The project/repo you're looking for does not exist.</span
    >
    <RouterLink to="/projects">Back to Projects</RouterLink>
  </div>
</template>

<style scoped>
h1 {
  margin: 4px 0px;
  line-height: normal;
  text-transform: capitalize;
}
.container {
  display: flex;
  flex-direction: column;
}
.topics-container {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.github-preview-container {
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
}

.link {
  margin-right: 8px;
  transition: 200ms;
  color: var(--primary-500);
}
.link:hover {
  transform: scale(1.2);
  transition: 200ms;
}
</style>
