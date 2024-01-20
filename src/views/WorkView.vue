<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import jobs from '@/config/work'
import Icon from '@/components/Icon.vue'

const jobsIcons = {
  front: 'react',
  back: 'server',
  cloud: 'cloud',
  auth: 'lock-alt',
  lecture: 'comments',
  mentorship: 'books'
}
</script>

<template>
  <Accordion :active-index="0" id="accordion-box">
    <AccordionTab
      v-for="{ icon, description, company, technologies, workingPeriod } in jobs"
      v-bind:key="company"
    >
      <template #header>
        <div>
          <div class="accordion-header">
            <img :src="icon" alt="" />
            <h2>{{ company }}</h2>
          </div>
          <span class="caption">
            {{ workingPeriod }}
          </span>
        </div>
      </template>

      <div class="content-container">
        <span class="body">
          {{ description }}
        </span>

        <div class="skills">
          <div
            class="skill-description"
            v-for="[key, value] in Object.entries(technologies)"
            v-bind:key="`${company}-${key}`"
          >
            <Icon :name="jobsIcons[key as keyof typeof jobsIcons]" type="line" class="skill-icon" />

            <span class="body">{{ value }}</span>
          </div>
        </div>
      </div>
    </AccordionTab>
  </Accordion>
</template>

<style scoped>
h2 {
  margin: 0;
}

img {
  margin-right: 8px;
  width: 24px;
  height: 24px;
  object-fit: contain;
}

#accordion-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.accordion-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.caption {
  color: var(--grey-500);
  line-height: normal;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.skills {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skill-description {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.skill-icon {
  color: var(--grey-900);
}
</style>
