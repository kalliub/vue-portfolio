<script setup lang="ts">
const {
  type = 'line',
  name,
  size
} = defineProps<{
  name: string
  type?: 'solid' | 'line'
  size?: 'small' | 'regular' | 'medium' | 'large'
}>()

const getIconType = () => {
  switch (type) {
    case 'solid':
      return 'uis uis'
    case 'line':
    default:
      return 'uil uil'
  }
}

const getFontSize = () => {
  switch (size) {
    case 'small':
      return '1rem'
    case 'medium':
      return '1.5rem'
    case 'large':
      return '2rem'
    case 'regular':
    default:
      return '1.25rem'
  }
}
</script>

<template>
  <i :class="`${getIconType()}-${name}`" />
</template>

<style scoped>
i {
  font-size: v-bind('getFontSize()');
  line-height: 1rem;
}
</style>
