<template>
  <h2 class="mt-4 text-cyan-500 text-center">{{ text }}</h2>
</template>

<script setup>
const props = defineProps({
  text: String,
});
</script>
