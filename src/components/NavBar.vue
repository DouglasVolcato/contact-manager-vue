<template>
  <nav class="flex flex-row flex-wrap justify-content-evenly w-full bg-primary">
    <div v-for="item in data.items">
      <router-link :to="item.to" class="no-underline">
        <Button> <i :class="item.icon"></i>{{ item.label }} </Button>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
const data = {
  items: [
    { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
    {
      label: "AddContact",
      icon: "pi pi-plus-circle text-xl",
      to: "/contacts/add",
    },
  ],
};
</script>
