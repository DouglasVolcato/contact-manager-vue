<template>
  <div
    class="flex flex-row m-2 border-double w-max p-1 bg-gray-200 border-round"
  >
    <div class="flex flex-column w-4 m-2">
      <img
        :src="imageUrl"
        alt="Profile"
        class="h-8rem w-8rem border-circle border-solid"
      />
    </div>
    <div class="flex flex-column justify-content-evenly m-1">
      <h4>
        {{ title }}
      </h4>
      <p>Mobile: {{ number }}</p>
      <p>Email: {{ email }}</p>
    </div>
    <div class="flex flex-column">
      <router-link to="/contacts/view/:contactId" class="no-underline">
        <Button icon="pi pi-eye" class="p-button-success m-1 border-solid" />
      </router-link>
      <router-link to="/contacts/edit/:contactId" class="no-underline">
        <Button icon="pi pi-pencil" class="m-1" />
      </router-link>
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
