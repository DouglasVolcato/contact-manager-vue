<template>
  <h2 class="mt-4 text-cyan-500 text-center">{{ text }}</h2>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String,
  },
};
</script>
