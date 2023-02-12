<template>
  <div
    v-if="loading"
    class="absolute top-0 left-0 surface-300 opacity-50 w-screen h-screen flex align-items-center justify-content-center"
  >
    <div class="w-min h-min m-auto ali">
      <ProgressSpinner animationDuration="1s" strokeWidth="3" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    loading: Boolean,
  },
};
</script>
