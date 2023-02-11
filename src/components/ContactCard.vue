<template>
  <div class="flex flex-row m-2 border-double w-max p-1 bg-gray-200">
    <div class="flex flex-column bg-primary w-4 m-2">
      <img :src="imageUrl" alt="Profile" class="h-8rem w-8rem" />
    </div>
    <div class="flex flex-column justify-content-evenly m-1">
      <h4>
        {{ title }}
      </h4>
      <p>Mobile: {{ number }}</p>
      <p>Email: {{ email }}</p>
    </div>
    <div class="flex flex-column">
      <Button icon="pi pi-eye" class="p-button-warning m-1" />
      <Button icon="pi pi-pencil" class="m-1" />
      <Button icon="pi pi-trash" class="p-button-danger m-1" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    title: String,
    number: String,
    email: String,
    imageUrl: String,
  },
};
</script>
