<script lang="ts" setup>
defineProps({
  title: String,
})
</script>
<template>
<button class="bg-primary text-white px-4 py-2 rounded-lg">{{ title }}</button>
</template>