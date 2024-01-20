<template>
  <div>
    <h1 class="title">
      Hi, my name is <br />
      Kalliu Brasil
    </h1>

    <h2 class="subtitle">{{ getAge() }} years old | Brazilian | Senior Software Engineer</h2>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'

const getAge = () => Math.floor(DateTime.now().diff(DateTime.fromISO('1996-04-04'), 'years').years)
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.title {
  margin: 0;
  padding: 0;
  line-height: normal;
}

.subtitle {
  margin: 0;
  line-height: 36px;
  color: var(--primary-500);
}

@media screen and (max-width: 768px) {
  .title {
    text-align: center;
  }

  .subtitle {
    text-align: center;
  }
}
</style>
