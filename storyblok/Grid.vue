<template>
  <div
    v-editable="blok"
    class="container mx-auto my-12 grid place-items-center gap-12 md:grid-cols-3"
  >
    <StoryblokComponent
      v-for="component in blok.columns"
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
