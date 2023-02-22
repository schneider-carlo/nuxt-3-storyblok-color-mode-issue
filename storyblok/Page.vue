<template>
  <div v-editable="blok" class="px-4">
    <StoryblokComponent
      v-for="component in blok.body"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>
