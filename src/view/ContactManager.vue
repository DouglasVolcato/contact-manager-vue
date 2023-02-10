<template>
  <div class="flex flex-row flex-wrap justify-content-center">
    <Title text="Contact Manager" />
    <Button class="p-button-success m-2 mt-3"
      >Add<i class="pi pi-plus-circle text-xl"></i
    ></Button>
  </div>
</template>

<script>
import Title from "../components/Title.vue";

export default {
  name: "ContactManager",
  components: { Title },
};
</script>

<style scoped></style>
