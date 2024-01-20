<script setup lang="ts">
import { useRoute } from 'vue-router'
import Icon from './Icon.vue'
import { inject } from 'vue'

const GITHUB_LINK = inject('GITHUB_LINK', '#')
const LINKEDIN_LINK = inject('LINKEDIN_LINK', '#')

const route = useRoute()
const isProjectPage = () => /^\/project\/.+$/g.test(route.fullPath)
</script>

<template>
  <div class="page-title-container">
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

    <div class="github-linkedin-container">
      <a :href="GITHUB_LINK" target="_blank" v-tooltip.bottom="'Open GitHub on a new tab'">
        <Icon name="github" size="large" />
      </a>
      <a :href="LINKEDIN_LINK" target="_blank" v-tooltip.bottom="'Open LinkedIn on a new tab'">
        <Icon name="linkedin" size="large" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.page-title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid var(--grey-200);
}
.github-linkedin-container {
  display: flex;
  gap: 16px;

  @media screen and (min-width: 768px) {
    display: none;
  }
}
.content-title {
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 4px 0px;
  gap: 4px;
  width: 100%;
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
