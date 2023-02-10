<template>
  <h2 class="w-max mt-4 m-auto text-cyan-500">{{ text }}</h2>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String,
  },
};
</script>
