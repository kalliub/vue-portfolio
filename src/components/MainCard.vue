<script setup lang="ts">
import { inject } from 'vue'
import IconVue from './Icon.vue'

const GITHUB_LINK = inject('GITHUB_LINK', '#')
const LINKEDIN_LINK = inject('LINKEDIN_LINK', '#')
</script>

<template>
  <div class="github-linkedin-row">
    <a :href="GITHUB_LINK" target="_blank" v-tooltip.bottom="'Open GitHub on a new tab'">
      <IconVue name="github" size="large" />
    </a>
    <a :href="LINKEDIN_LINK" target="_blank" v-tooltip.bottom="'Open LinkedIn on a new tab'">
      <IconVue name="linkedin" size="large" />
    </a>
  </div>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.github-linkedin-row {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 16px;
  gap: 16px;

  a {
    color: white;
    transition: 200ms;
  }

  a:hover {
    transform: scale(1.1);
    transition: 200ms;
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
}

.card {
  position: relative;
  border-radius: 12px 8px 8px 12px;
  box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 80vh;
  width: 100vw;
  max-width: 1000px;
  transition: all 0.1s;
  transform-style: preserve-3d;
  background-color: transparent;

  @media screen and (max-width: 1280px) {
    border-radius: 0;
    height: 100vh;
    max-width: none;
  }

  @media screen and (max-width: 768px) {
    height: calc(100dvh - 16px);
    width: calc(100vw - 16px);
    border-radius: 16px;
    flex-direction: column;
    padding-bottom: 0;
    box-sizing: border-box;
    background-color: white;
  }
}

.contentContainer {
  overflow: auto;
  flex-grow: 1;
  width: 100%;
  align-content: flex-start;
  padding-bottom: 16px;

  @media screen and (max-width: 1280px) {
    border-radius: 0px;
  }
}
</style>
