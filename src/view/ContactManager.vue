<template>
  <div class="flex flex-row flex-wrap justify-content-center">
    <Title text="Contact Manager" />
    <Button class="p-button-success m-2 mt-3"
      ><i class="pi pi-plus-circle text-xl"
    /></Button>
  </div>
  <form class="flex flex-row flex-wrap justify-content-center mt-5">
    <InputText placeholder="Search name" />
    <Button class="ml-2"> <i class="pi pi-search mt-1 mb-1" /></Button>
  </form>
</template>

<script>
import Title from "../components/Title.vue";

export default {
  name: "ContactManager",
  components: { Title },
};
</script>

<style scoped></style>
