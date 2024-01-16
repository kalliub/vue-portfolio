<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainCard from '@/components/MainCard.vue'
import photo from '@/assets/photo.png'
import NavigationsButtons from './components/NavigationsButtons.vue'
import PageTitleBar from './components/PageTitleBar.vue'
</script>

<template>
  <div class="main-layout">
    <MainCard>
      <img id="side-photo" :src="photo" alt="" class="big-photo" />

      <div class="content-container">
        <PageTitleBar />

        <RouterView />
        <NavigationsButtons />
      </div>
    </MainCard>
  </div>
</template>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.big-photo {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  object-fit: cover;
  height: 100%;
  max-width: 33%;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(3px);
  /* TODO: Implement brakpoints */
}

.content-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 32px 48px 0px 48px;
  background-color: white;
  border-radius: 0 8px 8px 0;
  overflow: auto;
}
</style>
